FROM node

RUN curl https://install.meteor.com/ | sh

EXPOSE 3000

RUN git config --global user.email "anurtayev@yahoo.com"
RUN git config --global user.name "Adil Nurtayev"

CMD ["meteor"]
