all:
	mkdir -p public
	ln -fs ../client/dist/styles public/styles
	ln -fs ../client/dist/scripts public/scripts
	ln -fs ../client/dist/images public/images
	ln -fs ../client/dist/img public/img
	ln -fs ../../../client/dist/main.handlebars app/views/layouts/main.handlebars
