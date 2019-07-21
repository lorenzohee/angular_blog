
# AngularBlog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Create guide

1. ng new angular-blog
   
  * project name can't contain _

2. link github

	`git remote add origin https://github.com/lorenzohee/angular_blog.git`

	`git pull`

	* if there is an error: 'fatal: refusing to merge unrelated histories'
	* please use this command: `git pull origin master --allow-unrelated-histories`

3. add Ivy
   
	 1. set the enableIvy option in the angularCompilerOptions in your project's tsconfig.app.json
	 ```
	 	{
		  "compilerOptions": { ... },
		  "angularCompilerOptions": {
		    "enableIvy": true
		  }
		}
	 ```

	 2. In the angular.json workspace configuration file, set the default build options for your project to always use AOT compilation.

	 ```
	{
		"projects": {
		"my-existing-project": {
			"architect": {
			"build": {
				"options": {
				...
				"aot": true,
				}
			}
			}
		}
		}
	}
	```

4. add material support
   
	1. install material by ng

		`ng add @angular/material`

	2. add css file to styles.scss

		`@import '@angular/material/prebuilt-themes/pink-bluegrey.css'`


	3. install material design icons

		`npm install material-design-icons --save`

	4. import icons to css file(set font-face in styles.scss file)

5. add blog module and home module

	`ng generate module home`
	`ng generate component home`

	`ng generate module blogs`
	`ng generate component blogs/blog-list`
	`ng generate component blogs/blog-detail`

6. add routes

	in app-routing.module.ts file:

	```
		const routes: Routes = [
			{
				path: 'blogs',
				loadChildren: ()=>import('./blogs/blogs.module').then(mod=>mod.BlogsModule)
			},
			{
				path: 'home',
				loadChildren: ()=>import('./home/home.module').then(mod=>mod.HomeModule)
			},
			{ path: '',
				redirectTo: '/home',
				pathMatch: 'full'
			}
		];
	```

	note: below angular 8.0.0, the loadChildren value is './blogs/blogs.mocule#BlogsModule'

	add nav in app.component.html

	```
	<mat-toolbar color="primary">
		<span>My Application</span>
		
		<button mat-button routerLink="/home">Home</button>
		<button mat-button routerLink="/blogs">Blog</button>
		<button mat-button>About</button>

		<span class="example-fill-remaining-space"></span>
		<mat-menu #appMenu="matMenu">
			<button mat-menu-item>Settings</button>
			<button mat-menu-item>Help</button>
		</mat-menu>
		
		<button mat-icon-button [matMenuTriggerFor]="appMenu">
			<mat-icon>more_vert</mat-icon>
		</button>
	</mat-toolbar>
	```
