all:
	mkdir -p public
	ln -fs ../client/dist/styles public/styles
	ln -fs ../client/dist/scripts public/scripts
	ln -fs ../../../client/dist/main.handlebars app/views/layouts/main.handlebars 
