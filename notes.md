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
1. Add an Exportable Function and Name the Function based on its page use
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

# Module 2: Components
## Components
1. Selecting what to make a component
> What is reusable or what violates DRY?
> ex.: Here we have header and nav
2. Creating component in components folder and name it according to its component
3. Add an Exportable Function and Name the Function based on its page use
```ts
export default function HeaderNav() {
  return (
    <>
    </>
  )
};
```
4. Add the HTMl and Tailwind CSS Code between <> and </>
5. Then change the code in the pages based on the exportable function
> ex.: <HeaderNav/>

## Passing Values
1. Create a props data structure preparing to receive a values outside and above function
> ex.
```ts
interface HeaderNavProps {
  activeNav: string
}
```
2. After the function name inside the () you can add parameters stating the data structure
```ts
export default function HeaderNav({ activeNav }: HeaderNavProps) {
  return (
    <>
    </>
  )
};
```
3. Then you can add it as display or conditional in TS(JS) way
```ts
<a href="/about" className={`border-solid border-green-500 px-5 py-2 text-white ${activeNav === "About" ? "border-b-[5px]" : ""}`}>
  About AITS
</a>
```
4. Then Modify each instances it is declared
```ts
// If in home/landing page
<HeaderNav 
  activeNav={"Home"}
/>
```
```ts
// If in about page
<HeaderNav 
  activeNav={"About"}
/>
```


# Module 2.1 Use of ShadCN Components
## Using ShadCN
1. Look for documentation of ShadCN
> https://ui.shadcn.com/docs/components/accordion
2. Select which components to use
> in this case the button
> in Using ShadCN Custom Components Require Pascal Case format
3. Determine which element to change
> we will be changing the button in header for login
> ex.
```ts
// at the top layer codes
import { Button } from "@/components/ui/button";

// other code here

// <a href="/login" className="rounded-full bg-green-200 px-5 py-2">Login</a>
<a href="/login">
  <Button>Login</Button>
</a>
```
> You should add the import code

### NOTE:
- Sometimes you might see the import like this
```ts
import { Button } from "../ui/button";
```
- this is not good practice at it might cause some issues later on so it is best to change it in the format of
```ts
// the @ serves as calling to the src folder
// the components is the folder where all components are resting
// the ui is where ShadCN components are stored
// button are the file we need
import { Button } from "@/components/ui/button";
```

## Using ShadCN Variants / Other Tags
if you will explore each pages of ShadCN components you will discover some variants of this components and you can use it as it fits to your design
> ex.
```ts
<a href="/login">
  <Button variant="outline">Login</Button>
</a>
```

## Using ShadCN and Tailwind
ShadCN also can use TailwindCodes by adding class
```ts
<a href="/login">
  <Button className="bg-green-300">Login</Button>
</a>
```