# Module 0: Basics
## Applying HTML and Tailwind design
1. Remove the default code
2. Add HTML Code and using Tailwind CSS to Create the landing/welcome page of the application.
> ex. header>(a>img.logo.left)+div.right>(nav>a*3>lorem1)+a>lorem1
3. Change img with NestJS Image
> Requirements: src, (width & height/fill), alt
> How to use src?
> 1. place the image in public
> 2. / indicate the public folder and using sub-folders require to input name or file name and extension name
>
>   example for file: /aits.png
>
>   example for folder & file: /folderName/aits.png
4. Complete the Design of Landing Page
> Hero Section
>
> Footer Section

# Module 1: Directories and Routing
## Naming Folder
There is 2 Types of Folder Naming in App:
- For Grouping
  - name is enclosed Parenthesis indicating that that is only used for dev or groupings of pages
- For URI
  - folder is named based on the URI that it will use:
  > ex.: the login in URI: localhost:3000/login
  > (page)>login

## Creating New Page
1. Create a Exportable Function
```ts
export default function LoginPage() {
  return (
    <main>

    </main >
  );
}
```
2. Add HTML Code and Tailwind CSS Code

## Routing to other Pages
1. In the a element find href then add the / followed by the folder name in directory format
> ex.: (page)>login
```ts
<a href="/login" className="rounded-full bg-green-200 px-5 py-2">Login</a>
```
> Note: (page) are not included since it is grouping folder
