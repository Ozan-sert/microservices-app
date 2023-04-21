# TicketHUB - Marketplace for selling and buying tickets
   Tickethub is a microservice-based marketplace website for buying and selling event tickets. It is built with Typescript, React, and MongoDB, and uses Docker and Kubernetes for containerization and deployment.
 
 
   The application is a marketplace for buying and selling event tickets. It's composed of several microservices that interact with each other through HTTP requests and message broker (NATS streaming server). Each microservice is responsible for a specific domain within the application, such as user authentication, ticket creation, order management, and so on.
 
   ## [Live Demo](https://www.ticketingapp.website/)
 ## Technologies Used

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![mongodb](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white)

 ##  Architecture
The application is built with a microservices architecture pattern. Each microservice is an independent application that can be deployed, scaled, and maintained independently. The microservices communicate with each other through HTTP requests and message broker.



The following microservices are part of the application:
- **Auth**: Handles user authentication and authorization
- **Tickets**: Handles ticket creation, updating, and querying
- **Orders**: Handles order creation and payment processing
- **Expiration**: Listens to order creation events and cancels them if payment is not completed in a given time
- **Payments**: Handles payment processing and emits payment completed events
- **Client**: Frontend application built with Next.js and React that consumes the APIs exposed by the microservices

## Features

- Typescript is used to write the server-side code, ensuring type safety and better error handling.
- MongoDB is used as the primary database for the application, providing a scalable and flexible document-based data store.
- Redis is used for caching and optimizing database queries for improved performance.
- GitHub Actions is used to automate the testing and deployment of the application.
- Automated tests are run on each code push, ensuring code quality and preventing regressions.
- The application is deployed to a DigitalOcean cluster using Kubernetes, enabling easy scaling and management of the application.
- A Let's Encrypt certificate is used for SSL/TLS encryption, ensuring secure communication between the client and the server.



# Installation
 

### Running on Google Cloud Platform

[![GCP Badge](https://img.shields.io/badge/-Google_Cloud-4285F4?style=flat&logo=googlecloud&logoColor=white)](https://cloud.google.com/gcp/)

1. clone _cloud_ branch on your computer

2. install [node.js](https://nodejs.org/en/), [skaffold](https://skaffold.dev/), [docker](https://www.docker.com/), [kubectl](https://kubernetes.io/docs/tasks/tools/)

3. sign up for a free account with $300 on the GCP and sign up for the docker hub account

4. create an image by running this command in every sub-folder that has Dockerfile
```
docker build -t <YOUR_ACCOUNT_NAME>/<YOUR_IMAGE_NAME> .
```

5. push all images to the docker hub by running this command
```
docker push <YOUR_ACCOUNT_NAME>/<YOUR_IMAGE_NAME>
```

6. create a new project on GCP then enable _Kubernetes Engine API_ and _Cloud Build API_ after successfully enabling API services, grant permission for the _Cloud Build_ service account permission on _Cloud Build API_

7. create a new Kubernetes cluster with the minimum resource at 3 nodes (recommended), and select any region that is closest to your location

8. install [GCP SDK](https://cloud.google.com/sdk/docs/install-sdk) to connect our images to GCP cluster context ([How to install Google Cloud SDK on macOS](https://stackoverflow.com/questions/31037279/gcloud-command-not-found-while-installing-google-cloud-sdk))

9. open google cloud SDK and log in, initiate with and then choose the correct options to proceed
```
gcloud auth login
gcloud init
```

10. create Kubernetes context in your desktop by running this command (your cluster name from the GCP cluster that you created)
```
gcloud container clusters get-credentials <YOUR_CLUSTER_NAME>
```

11. see the list of contexts and then select a new context by running these commands
```
kubectl config get-contexts
kubectl config use-context <CONTEXT_NAME>
```

12. install [ingress-nginx](https://kubernetes.github.io/ingress-nginx/deploy/#quick-start) and [ingress-nginx for GCP](https://kubernetes.github.io/ingress-nginx/deploy/#gce-gke)

13. find your load balancing port that GCP automatically generated in the _Network Services_ tab in GCP

14. for _windows_ users; open host file at `C:\Windows\System32\drivers\etc\hosts`, for _mac_ users; open host file at `\etc\hosts` then edit by adding `YOUR_LOAD_BALANCING_PORT YOUR_CUSTOM_URL` and save as an admin (ex. `56.125.456.45 custom.com`)

15. config all yaml file to matches your GCP project ID

16. create all [kubernetes secrets](#setup-env)

17. run this command then authenticate the GCP account via a web browser
```
gcloud auth application-default login
```

18. make sure to use the correct context before running this command at the root directory
```
skaffold dev
```

19. open a web browser and enter your custom URL with `https://` to see this project come to life!

### Running on Docker Desktop

[![Docker Badge](https://img.shields.io/badge/-Docker-2496ED?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)

1. clone _dev-mac_ branch on your computer

2. install [node.js](https://nodejs.org/en/), [skaffold](https://skaffold.dev/), [docker](https://www.docker.com/)

3. enable Kubernetes in docker desktop preferences

4. create an image by running a command in every folder that has a _Dockerfile_
```
docker build -t <YOUR_ACCOUNT_NAME>/<YOUR_IMAGE_NAME> .
```

5. push all images to the docker hub by running a command in every folder that has a _Dockerfile_
```
docker push <YOUR_ACCOUNT_NAME>/<YOUR_IMAGE_NAME>
```

6. see list of Kubernetes contexts and then select a new context by running these commands
```
kubectl config get-contexts
kubectl config use-context docker-desktop
```

7. install [ingress-nginx](https://kubernetes.github.io/ingress-nginx/deploy/#quick-start) and enable Kubernetes in Docker Desktop software

8. for _windows_ users; open host file at `C:\Windows\System32\drivers\etc\hosts`, for _mac_ users; open host file at `\etc\hosts` then edit by adding `127.0.0.1 YOUR_CUSTOM_URL` and save as an admin (ex. `127.0.0.1 custom.com`)

9. config all yaml file to match your custom URL

10. create all [kubernetes secrets](#setup-env)

11. run `skaffold dev` in this project root directory, and make sure to use the correct context before running the command

12. open a web browser and enter your custom URL with `https://` to see this project come to live!

# Setup Kubernetes Secret

[(Back to top)](#table-of-contents)

Create all these Kubernetes secrets in Kubernetes context

**MONGO_URI_USER, MONGO_URI_PRODUCT, MONGO_URI_ORDER, MONGO_URI_PAYMENT** : [MongoDB](https://www.mongodb.com/)
```
kubectl create secret generic mongo-secret \
"--from-literal=MONGO_URI_PRODUCT=<YOUR_MONGO_DB_URI>" \
"--from-literal=MONGO_URI_USER=<YOUR_MONGO_DB_URI>" \
"--from-literal=MONGO_URI_ORDER=<YOUR_MONGO_DB_URI>" \
"--from-literal=MONGO_URI_PAYMENT=<YOUR_MONGO_DB_URI>"
```

**JWT_KEY : --whatever you want--**
```
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=<YOUR SECRET>
```

**STRIPE_KEY** : [Stripe](https://stripe.com/)
```
kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=<YOUR_STRIPE_KEY>
```

**PAYPAL_CLIENT_ID** : [Paypal](https://developer.paypal.com/home)
```
kubectl create secret generic paypal-secret --from-literal=PAYPAL_CLIENT_ID=<YOUR_PAYPAL_CLIENT_ID>
```

## Deployment

[(Back to top)](#table-of-contents)

## Deploy on DigitalOcean

[![DigitalOcean](https://img.shields.io/badge/DigitalOcean-0080FF?style=flat&logo=digitalocean&logoColor=white)](https://www.digitalocean.com/)

1. sign up a free account with a $200 for 60 days trial and create a Kubernetes cluster in a new project on Digital Ocean

2. generate a new access token on Digital Ocean to connect with Digital Ocean via doctl, go to the _API_ menu then click _generate a new token_, set expiration date and enable both read and write scopes, copy the _token code_ for use in the next step

3. install [doctl](https://docs.digitalocean.com/reference/doctl/how-to/install/) and [kubectl](https://kubernetes.io/docs/tasks/tools/), then run
```
doctl auth init --access-token <API_TOKEN_CODE>
```

4. connect with Digital Ocean k8s cluster context by running this command and authorize with your credentials
```
doctl kubernetes cluster kubeconfig save <YOUR_CLUSTER_NAME>
``` 

5. switch Kubernetes context to the new context by running
```
kubectl config use-context <CONTEXT_NAME>
```

6. setup all Kubernetes secrets following [this step](#setup-kubernetes-secret)

7. create _GitHub _workflow_ for building an initial docker image on push event at the _main_ branch and perform automated testing in every service on pull request event trigger with trying to merge with the _main_ branch

```
name: deploy-client

on:
  push:
    # watch for pull request into main branch
    branches:
      - main

    # watch for changes in client folder
    paths:
      - "client/**"

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      # build an image
      - run: cd client && docker build -t <YOUR_ACCOUNT_NAME>/<YOUR_IMAGE_NAME> .

      # login on docker hub
      - run: docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD
        env:
          DOCKER_USERNAME: ${{ secrets.DOCKER_USERNAME }}
          DOCKER_PASSWORD: ${{ secrets.DOCKER_PASSWORD }}

      # push an image to docker hub
      - run: docker push <YOUR_ACCOUNT_NAME>/<YOUR_IMAGE_NAME>
```

8. generate another new access token on Digital Ocean for authentication via GitHub Action, go to the _API_ menu then click _generate a new token_, set expiration date and enable both read and write scopes, copy the _token code_ for use in the next step as a `DIGITALOCEAN_ACCESS_TOKEN` 

9. add GitHub action secrets for _docker credentials_ and _digitalocean access token key_ at the security setting in the repository
```
DIGITALOCEAN_ACCESS_TOKEN = 
DOCKER_USERNAME = 
DOCKER_PASSWORD = 
```

10. edit files in every service then commit code to the _main_ branch for triggering **Github Action workflows** to build and push all images to your Docker Hub

11. install [ingress-nginx](https://kubernetes.github.io/ingress-nginx/deploy/#digital-ocean) to automatically create **DigitalOcean Load Balancer**

12. separate k8s folder to k8s-dev and k8s-prod then copy `ingress-srv.yaml` file to both folders and edit the host URL to a new domain name

13. create a GitHub workflow for telling the Kubernetes cluster to use images we built by adding these lines

```
- uses: digitalocean/action-doctl@v2
  with:
    token: ${{ secrets.DIGITALOCEAN_ACCESS_TOKEN }}
- run: doctl kubernetes cluster kubeconfig save <YOUR_CLUSTER_NAME>
- run: kubectl rollout restart deployment <YOUR_DEPLOYMENT_NAME>
```

14. purchase a domain name with a promotion that can be very cheap as $1 for the 1st year such as Namecheap, Porkbun, or Dynadot

15. config custom domain name nameserver with your domain name registration website by custom adding these lines
```
ns1.digitalocean.com
ns2.digitalocean.com
ns3.digitalocean.com
```

16. add a domain name in the Digital Ocean at networking tab then create a new record

```
// A record
HOSTNAME: @
WILL DIRECT TO: <YOUR_LOAD_BALANCER>
TTL: 30

// CNAME record
HOSTNAME: www
IN AN ALIAS OF: @
TTL: 30
```

17. add your cluster name at `deploy-manifests.yaml` file then redo step 7. again

```
name: deploy-manifests

on:
  push:
    # watch for pull request into main branch
    branches:
      - main

    # watch for changes in infra folder
    paths:
      - "infra/**"

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      # use and cliententicate doctl
      - uses: digitalocean/action-doctl@v2
        with:
          token: ${{ secrets.DIGITALOCEAN_ACCESS_TOKEN }}

      # use and cliententicate doctl
      - run: doctl kubernetes cluster kubeconfig save <YOUR_CLUSTER_NAME>

      # apply deployment yaml files (k8s-prod is for production!)
      - run: kubectl apply -f infra/k8s && kubectl apply -f infra/k8s-prod
```

18. change `do-loadbalancer-hostname` and `host` at file `infra/k8s-prod/ingress-srv.yaml` to your domain name

19. change the URL in `client/api/build-client.js` to your domain name

20. after that, we will follow step 4 of this guide [How to Set Up an Nginx Ingress with Cert-Manager on DigitalOcean Kubernetes](https://www.digitalocean.com/community/tutorials/how-to-set-up-an-nginx-ingress-with-cert-manager-on-digitalocean-kubernetes) to make our website ready for **HTTPS** requests with the certificate issued by **Let's encrypt**

21. begin with installing the _cert-manager_ namespace by running the command
```
kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v1.7.1/cert-manager.yaml
```

22. change your directory to `infra/issuer/` there will be 2 files that you need to change the _email_ and _name of a secret key_ as you wish then run the command
```
kubectl create -f staging_issuer.yaml
``` 
```
kubectl create -f production_issuer.yaml
```

23. at file `infra/k8s-prod/ingress-srv.yaml` change _cert-manager.io/cluster-issuer_ to `"letsencrypt-staging"` then run this command at `infra/k8s-prod/` directory
```
kubectl apply -f ingress-srv.yaml
```

24. then change _cert-manager.io/cluster-issuer_ back to `"letsencrypt-prod"` and run this command at `infra/k8s-prod/` directory
```
kubectl apply -f ingress-srv.yaml
```

25. waiting around 2-15 minutes for setting up then browse your website with **HTTPS** protocol


