require 'nokogiri'



before /textile/  do

 	@toc =  extract_toc(@_stasis.path)
 	@newcontent = decorate(@_stasis.path)

	layout '/layouts/docsection.html.haml' 	

end
