
### aleemisiaka.dev

This is a personal website repo for aleemisika.com and is hosted on Netlify.

This project is Dockerized and could be run by build the image from the included docker:

`docker image build -t myblog .`

Then running a container off the image using:

`docker container run --name myblog -v $(pwd):/home/node/app -p 8000:8000 myblog gatsby develop`

PS: Ensure you install the dependencies outside of the docker container before start the container
