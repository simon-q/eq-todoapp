# Todo App
> App consists of Java backend and Vue.js frontend.
All codebase and resources are built and run via maven.
App uses Spring Boot (with Tomcat instead of Jetty as I've had some problems making Jetty work with everything else).

> Database is initially filled with data from **import.sql** and the table structure is recreated on each start of the application.
You can change that in **application.properties** by modifying line **spring.jpa.hibernate.ddl-auto=create-drop**

> Vue source code is outside of src in a separate directory **vue** and can be developed separately.
Code in Vue uses class syntax and it is written in Typescript. This combination is officially supported by Vue but
some typings for Vue plugins are still incomplete so in some places you can see <any>. Hopefully that will change in the future.

## Prerequisites
#### Java 8+
#### Maven
#### Node.js v12+

## Running the app locally

### install
```
mvn install
```

### run
```
mvn spring-boot:run
```

##### app should be running on http://localhost:8080/

##


### Developing Vue app

#### Installs dependencies:
```
npm install
```

#### Compiles and hot-reloads for development:
```
npm run serve
```

#### Compiles and minifies for production:
```
npm run build
```

#### Lints and fixes files:
```
npm run lint
```

credits:
landing page template [woo]
(https://www.styleshout.com/free-templates/woo/)
