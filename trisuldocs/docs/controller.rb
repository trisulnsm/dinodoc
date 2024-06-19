before /haml/ do
  layout '/layouts/docs/layout_full_no-sidebar.html.erb'
end

require 'nokogiri'
require 'erubis'

helpers do 

  # extract heading from all textile docs in dir 
  def extract_toc( current_file )
    # merge custom TOC order with GLOB
    custom_order = []
    basedir = File.dirname(current_file)
    if File.exists?(basedir + "/toc.dat")
      custom_order  = File.readlines(basedir + "/toc.dat").collect{|a| basedir + "/" + a.chop}
    end
    ordered_files =  custom_order | Dir.glob(basedir+"/*.textile")    

    toc_dom = Nokogiri::HTML::Builder.new  do |toc|
      toc.li(class:"remove") {
        ordered_files.each do |textile_file_path|

            fname = File.basename(textile_file_path).gsub(/.(textile|haml)/,"")

            dom = Nokogiri::HTML(Tilt.new(textile_file_path).render)
            
            head = dom.at("h1")
            raise "No h1 for #{textile_file_path}" if head.nil?


	       		headcls =  textile_file_path =~ /HEAD/ ? "toc_head":"";

            # expand full heads in same path as this file 
            if textile_file_path==current_file
              toc.li(:class=>"activemenu #{headcls}"){

                if head.text =~ /^Object/ 
                  toc.i(:class=>'fa fa-li fa-cube')
                end
                toc.a(:href => fname,:class=>"open") {
                  toc.text   "#{head.text}"
                }
                toc.ul{
                  dom.css("h2").each do |headinglink|
                      link =  headinglink.text.downcase.gsub(/\s/,'_')

					            toc.li(:class=>'toc_'+headinglink.name) {
                      toc.a(:href=>"#{fname}#"+link) {
                        toc.html headinglink.text 
                      }
                    }
                  end
                }
              }
            else
              toc.li(:class =>  "#{headcls}"){
                toc.a(:href => fname) {
                    toc.text  head.text
                }
              }
            end
            
        end
      }
    end

    return toc_dom.doc.inner_html
  end


  # decorate documentation & return new html for rendering 
  def decorate( textile_file_path )
    # for user doc, autogeneration of section numbers 
    doc_number = 0
    sec_number = 0

    begin
      doc_number =  File.read( File.dirname(textile_file_path) + "/toc.number").chop
      toc_order = File.readlines( File.dirname(textile_file_path) + "/toc.dat").collect{ |f| f.strip} 

      for sec_number in 1..toc_order.size
        if File.basename(textile_file_path) == toc_order[sec_number-1]
          break
        end
      end
    rescue
    end


    dom = Nokogiri::HTML( Tilt.new(textile_file_path).render  )

    # decorated output DOM
    cont  = Nokogiri::HTML::Builder.new  do 
      div {
      }
    end

    # add a HTML5 section from first heading to subhead 
    h1 = dom.at('h1')  
    secb = Nokogiri::HTML::Builder.new do |n|
      n.section(:id => "top", :class => 'docsection') {
      }
    end

    
    # automatically make all tables zebra striped (bootstrap style) 
    dom.search('table').each do |table|
       table['class'] = table['class'] || "table table-hover table-bordered table-condensed"
    end 

    # decorate with bootstrap block-message 
    dom.search('div').each do |div|
     div['class']="alert  alert-danger" if div['class']=="error"
     div['class']="alert  alert-info" if div['class']=="info"
     div['class']="alert  alert-warning" if div['class']=="warning"
     div['class']="alert  alert-success" if div['class']=="success"
    end 


    # h2 becomes linked sections within doc
    heads = dom.css('body > h2')  
    if heads.size==0
      @title = dom.at('h1').text()
      p "Semantic Warning: No level 2 heading inside doc for section :  #{textile_file_path}"
      return dom.inner_html
    elsif heads.size==1
      headpairs=[ [heads[0], h1] ]
    else
      headpairs = heads.size.times.collect { |i|  [ heads[i], heads[i+1] ]  } 
      headpairs.last[1] = headpairs.first[0]
    end

    # autohint boxes - for doc effect
    dom.search("p.autohint").each do |ah|
      
      # what fontawesome icon to use 
      hints  = ah.attr("class").split(" ")
      hints = %w( flag info)  if hints.empty?
      hints << "warning" if hints.size == 2

      fa = hints[1]   # what icon?
      aa = hints[2]   # what alert box 

      atop =   Nokogiri::HTML::Builder.new do |n|
          n.div(:class => "callout  callout-#{aa}") {
              n.i(:class => "fa fa-#{fa}  pull-left fa fa-border ")
          }
      end
      atop.doc.at("div").add_child(ah.children)
      ah.replace(atop.doc.at("div"))

    end


    # image with caption
    dom.search("p.image-with-caption").each do |ah|
      iimg = ah.search("img")
      
      wrap =   Nokogiri::HTML::Builder.new do |n|
          n.div(:class => "image-box panel panel-info") {
            n.div(:class => "panel-body") {
              n.img(:src => iimg.attr("src").value, :alt => iimg.attr("alt").value,:style=>"display:block;margin: 0 auto")
              n.p(:class => "image-box-caption text-center") {
                n.text  ah.text
              }
            }
          }
      end
      ah.replace(wrap.doc.at("div"))

    end

        

    # get all h2 subheads, to wrapped in section & anchored 
    sec = secb.doc.at('section')
    cn = collect_between(h1,headpairs[0][0])
    cn.each  do  |n| 
      sec.add_child(n) 
    end 
    cont.doc.at('div').add_child(sec)

    headpairs.each do |hp|

      h2 = hp[0]
      h2_next = hp[1]

      link =  h2.text.downcase.gsub(/\s/,'_')

      h2.set_attribute("id",link)

      secb = Nokogiri::HTML::Builder.new do |n|
        n.section(:id => link) {
        }
      end

      sec = secb.doc.at('section')
      cn = collect_between(h2,h2_next)
      cn.each  do  |n| 
        sec.add_child(n) 
      end 

      cont.doc.at('div').add_child(sec)
    end


    # all h1,h2,h3 get anchor tag
    cont.doc.css('h1,h2,h3').each do |h|
    
      linkid= h.text.downcase.gsub(/\s/,'_')
      h.add_previous_sibling("<a id='#{linkid}'/>")

    end

    # h1,h2 get auto document numbering (every online doc seems to have it )
    if doc_number.to_i  > 0 
      topic_number=1
      cont.doc.css('h1,h2').each do |h|
      
        if h.name =='h1' 
          h.content= "#{doc_number}.#{sec_number}. #{h.text}" 
        elsif h.name == 'h2'
          h.content= "#{doc_number}.#{sec_number}.#{topic_number} #{h.text}" 
          topic_number += 1
        end
      end
    end


    # pre - gets a code tag 
    pres = cont.doc.css('pre').each do |pcode|

      wrap = cont.doc.create_element("code")
      
      if textile_file_path =~/\/docs\/lua\//
        wrap.set_attribute("class","language-lua")
      end
      if textile_file_path =~/\/docs\/trp\/samples\// or textile_file_path =~/\/docs\/trp\/trpgem/

        wrap.set_attribute("class","language-ruby")
      end

      if textile_file_path =~/\/docs\/ref\/trpproto.html/
        wrap.set_attribute("class","language-protobuf")
      end

      
      wrap.children=pcode.children
      pcode << wrap
    end
    
    @title = cont.doc.at('h1').text 


    cont.doc.css('div.lua_skeletons').each do |div|
      file=div.attr('data-file')
      text=div.attr('data-name')
      url= "https://github.com/trisulnsm/trisul-scripts/blob/master/lua/skeletons/"+file+".lua"

      a = Nokogiri::HTML::Builder.new do |n|
        n.i(:class=>'fa fa-github'){
        n.a(:href=>url,:target=>"_blank", :class => 'btn btn-info'){
          n.text  text + " skeleton script"
        }
      }
      end
      div.add_child(a.doc.at('a'))
    end
    return  cont.doc.inner_html
  end

end
