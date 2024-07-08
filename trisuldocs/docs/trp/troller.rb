require 'nokogiri'


before /textile/  do
 	@toc =  extract_toc(@_stasis.path)
 	@newcontent = decorate(@_stasis.path)
	layout '/layouts/docs/layout_sidebar_boxed.html.erb' 	
end
