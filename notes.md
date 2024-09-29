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
> example for file: /aits.png
>
> example for folder & file: /folderName/aits.png

4. Complete the Design of Landing Page

> Hero Section
>
> Footer Section

# Module 1: Directories and Routing

## Naming Folder

There is 2 Types of Folder Naming in App:
* For Grouping
  + name is enclosed Parenthesis indicating that that is only used for dev or groupings of pages
* For URI
  + folder is named based on the URI that it will use:
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

#### Import Directory

* Sometimes you might see the import like this

```ts
import { Button } from "../ui/button";
```

* this is not good practice at it might cause some issues later on so it is best to change it in the format of

```ts
// the @ serves as calling to the src folder
// the components is the folder where all components are resting
// the ui is where ShadCN components are stored
// button are the file we need
import { Button } from "@/components/ui/button";
```

#### Different Import

* Sometimes we forget to check which to import and we mistake importing
* The following code below is one of the examples of different import which show different code.

```ts
import { Button } from "react-day-picker";
```

* To prevent this make sure to check the following:
  + It has components and ui in the directory

```ts
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

# Module 2.2 Creating Variants for Custom Components
1. Same in creating components with variable

```ts
interface HeaderNavProps {
  activeNav: string
  status: string
}

export default function HeaderNav({ activeNav, status }: HeaderNavProps) {
  return (
    <>
    </>
  )
};
```

2. The difference is that you need to create multiple functions connected to main function but has different codes or different returns
---
a. Multiple Functions

```ts
interface HeaderNavProps {
  activeNav: string
  status: "Active" | "Inactive" // This is called restricted input which controls only to input only this 2 choices. You can add longer variations but all is separated by |
}

export default function HeaderNav({ activeNav, status }: HeaderNavProps) {
  switch(status) {
    case "Active":
      return ActiveNav();
    case "Inactive":
      return InactiveNav();
    default:
      return 
  }
};

function ActiveNav() {
  return (
    <>
    // Code here
    </>
  )
};

function InactiveNav() {
  return (
    <>
    // Code here
    </>
  )
};
```

# Module 3 Basic Hooks

Hooks allow you to add additional logic such as state to your components. You can think of state as any information in your UI that changes over time, usually triggered by user interaction.

## Using useState Hook

Information stored in `useState` are recreated every time page is refreshed

> Note: for this Demo Go to the about/page.tsx

1. Setup the hook
Requirements:
* Adding `"use client"` at the top most line of the code indicating it has user side components(which is useState).
* Creating `const` Variable and Setter then initialize the `useState()`

> Make sure to add the `set` at the name of setter
> syntax:
> undefined value: `const [name, setName] = useState(defaultValue);`

> undefined value: `const [name, setName] = useState<Data Type/Structure>(defaultValue);`

```ts
// ex.:
const [likeCount, setLikeCount] = useState<int>(0);
```

* Add the import from react

```ts
import { useState } from "react";
```

2. Use the variable

```ts
<Button>Like ({likeCount})</Button>
```

3. Use the Setter
* Use In Function

```ts
  const AddCounter = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <main>
      <HeaderNav
        activeNav={"About"}
      />
      {/* This is used only for demo in Hooks */}
      <Button onClick={AddCounter}>Like ({likeCount})</Button>
    </main >
  );
```

* Use Directly

```ts
  return (
    <main>
      <HeaderNav
        activeNav={"About"}
      />
      {/* This is used only for demo in Hooks */}
      <Button onClick={() => setLikeCount(likeCount + 1)}>2. Like ({likeCount})</Button>
    </main >
  );
```

## Using useEffect Hook

Used to refresh data when certain information changes.
It always start to be used upon refresh of the page

> Note: for this Demo Go to the about/page.tsx

1. Setup the hook
Requirements:
* Adding `"use client"` at the top most line of the code indicating it has user side components(which is useEffect).

```ts
// Does only once syntax
  useEffect(() => {

  }, []);
```

```ts
// Does when value changes syntax
  useEffect(() => {

  }, [valueToListen]);
```

2. Add the instructions it will follow inside

  + example:

```ts
  const [likeCount1, setLikeCount1] = useState<number>(0);
  const [likeCount1Listener, setLikeCount1Listener] = useState<number>(0);

  const AddCounter = () => {
    setLikeCount1(likeCount1 + 1);
  };

  useEffect(() => {
    setLikeCount1Listener(likeCount1Listener + 1);
  }, [likeCount1]);

    return (
    <main>
      <HeaderNav
        activeNav={"About"}
      />
      {/* This is used only for demo in Hooks */}
      <Button onClick={AddCounter}>1. Like ({likeCount1})</Button>
      <p>Like Count 1 Changes: {likeCount1Listener}</p>
    </main >
  );
```

## Using useReducer Hook

Can Store More Variable/Data Structure at once in different state

> Note: for this Demo Go to the about/page.tsx

1. Setup the hook
Requirements:
* Adding `"use client"` at the top most line of the code indicating it has user side components(which is useEffect).
* Adding Props

```ts
// outside the function below imports
// Syntax
interface ReducerPropsName {
  // keyName: Data Type/Structure
  name: string
}

// Example
interface ReducerProps {
  type: 'SET_NAME' | 'SET_EMAIL' | 'SET_PASSWORD' | ''
  payload: string
}
```

* Initialized Value of Object

```ts
// inside the function
// Example
const requiredDataInitialState = {
  name: '',
  email: '',
  password: ''
};
```

* Use the format for function

```ts
// Does only once syntax
// Syntax
  function SetDataOfReducer(state: any, action: ReducerProps) {
    switch (action.type) {
      case 'value1':
        return { ...state, key1: action.payload };
      case 'valu2':
        return { ...state, key2: action.payload };
      default:
        return state;
    }
  };

// Example
  function SetDataOfReducer(state: any, action: ReducerProps) {
    switch (action.type) {
      case 'SET_NAME':
        return { ...state, name: action.payload };
      case 'SET_EMAIL':
        return { ...state, email: action.payload };
      case 'SET_PASSWORD':
        return { ...state, password: action.payload };
      default:
        return state;
    }
  };
```
