before /textile/  do
  @activetab = {:devs => 'active'}
 	@toc =  extract_toc(@_stasis.path)
 	@newcontent = decorate(@_stasis.path)
	layout '/layouts/lua/layout_sidebar_boxed.html.erb'
end
