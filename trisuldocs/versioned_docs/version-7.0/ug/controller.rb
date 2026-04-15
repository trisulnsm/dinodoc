

before /textile|index.html.haml/  do
  @activetab = {:users => 'active'}
 	@toc =  extract_ug_toc(@_stasis.path)
 	@newcontent = decorate(@_stasis.path)

  layout '/layouts/docs/layout_sidebar_boxed.html.erb' 	
  # layout '/layouts/docs/layout_full_left-sidebar.html.erb'  

end

helpers do 

  # extract heading from all textile docs in dir 
  # also attach to correct position in basemenu
  def extract_ug_toc( current_file )

    base_dom = Nokogiri::HTML( Tilt.new(@_stasis.root + "/docs/ug/basemenu.html.haml").render )

    # merge custom TOC order with GLOB
    custom_order = []
    basedir = File.dirname(current_file)
    if File.exists?(basedir + "/toc.dat")
      custom_order  = File.readlines(basedir + "/toc.dat").collect{|a| basedir + "/" + a.chop.strip }
    end
    ordered_files =  custom_order | Dir.glob(basedir+"/*.textile")

    dir_number = File.read(basedir+"/toc.number").to_i 
    doc_number = 0
    sec_number = 0

    toc_dom = Nokogiri::HTML::Builder.new  do |toc|
      toc.ul {

        ordered_files.each do |textile_file_path|
          doc_number = doc_number+1


          dom = Nokogiri::HTML(Tilt.new(textile_file_path).render)
          if textile_file_path==current_file

            #heads = dom.css("h1,h2,h3")
            heads = dom.css("h1,h2")
            heads.each do |hd|
              link =  hd.text.downcase.gsub(/\s/,'_')
              toc.li(:class=>'activemenu toc_'+hd.name) {
                toc.a(:href=>"#" + link) {
                  if hd.name=='h1'
                    toc.text "#{dir_number}.#{doc_number}. #{hd.text}"
                  elsif hd.name=='h2'
                    sec_number = sec_number+1
                    toc.text "#{dir_number}.#{doc_number}.#{sec_number}. #{hd.text}"
                  else
                    # toc.text hd.text
                  end
                }
              }
            end
          else 
            fname = File.basename(textile_file_path).gsub(/.(textile|haml)/,"")
            head = dom.at('h1')
            if head.nil? 
              p "Need h1 for TOC heading " + textile_file_path 
              title = "fname"            
            else
              title = head.text
              # toc.text   "#{doc_number}. #{title}"
            end 
            toc.li {
              toc.a(:href=> fname ) {
                toc.text   "#{dir_number}.#{doc_number}. #{title}"
              }
            }
          end
        end
      }
    end

    # search for insertion point in base nav and put it there
    ugsubid = current_file.split("/")[-2]
    ins = base_dom.at("li##{ugsubid}") || base_dom.at("li#default")
    ins.add_child(toc_dom.doc.at('ul'))
    
    return base_dom.inner_html
  end


end
