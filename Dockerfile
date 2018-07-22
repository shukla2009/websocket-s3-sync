FROM shukla2009/node-aws

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install

CMD ["npm","start"]
