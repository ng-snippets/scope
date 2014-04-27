ng-app, controllers and scope 

`ng-app` is used to identify the root element of the page which belongs to angularJS . For example, if we are using angularjs only for a small paragraph, we mention the `ng-app` in that paragraph. 

```html
<p ng-ap > </p>
```

Usually when the whole application is built on AngularJS, we add it to the body . 

More on ng-app at angularJS docs . https://docs.angularjs.org/api/ng/directive/ngApp 

Usually we define an application passing a name and empty params . So that we can add controllers, views and other configurations. 

In our example we created a new Controller named "MainController" and assigned a `div` for the controller. 
By doing this , the `scope` of the `controller` is confined only to that `div` .

`$scope`


