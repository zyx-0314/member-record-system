"use client"

import HeaderNav from "@/components/elements/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useReducer, useState } from "react";

interface ReducerProps {
  type: string
  payload: string
}

export default function AboutPage() {
  const [likeCount1, setLikeCount1] = useState(0);
  const [likeCount2, setLikeCount2] = useState<number>(0);

  const userInformation = {
    fName: "",
    lName: "",
    username: "",
    password: "",
  }

  function SetUserInformation(state: any, action: ReducerProps) {
    switch (action.type) {
      case "fName":
        return { ...state, fName: action.payload }
      case "lName":
        return { ...state, lName: action.payload }
      case "username":
        return { ...state, username: action.payload }
      case "password":
        return { ...state, password: action.payload }
      default:
        return state
    }
  };

  const [state, dispatch] = useReducer(SetUserInformation, userInformation);

  const IncrementLike = () => {
    setLikeCount1(likeCount1 + 1);
  };

  const LikeHandler = (control: string) => {
    if (control === "+") {
      setLikeCount2(likeCount2 + 1);
    } else {
      setLikeCount2(likeCount2 - 1);
    }
  };


  return (
    <main>
      <HeaderNav
        activeNav={"About"}
      />
      <Button onClick={IncrementLike} variant={"secondary"} className="text-2xl">Like Up {likeCount1}</Button>
      <div className="p-2 bg-red-300" onClick={() => setLikeCount1(likeCount1 - 1)}>Like Down {likeCount1}</div>
      <br />
      <Button onClick={() => LikeHandler("+")} variant={"ghost"} className="text-2xl">Like Up {likeCount2}</Button>
      <Button onClick={() => LikeHandler("-")} variant={"destructive"} className="text-2xl">Like Down {likeCount2}</Button>
      <br />
      <br />
      <p>First Name
        <Input type="text" onChange={(e) => dispatch({
          type: "fName",
          payload: e.target.value
        })}></Input>
      </p>
      <p>Last Name
        <Input type="text" onChange={(e) => dispatch({
          type: "lName",
          payload: e.target.value
        })}></Input>
      </p>
      <p>Username
        <Input type="text" onChange={(e) => dispatch({
          type: "username",
          payload: e.target.value
        })}></Input>
      </p>
      <p>Password
        <Input type="password" onChange={(e) => dispatch({
          type: "password",
          payload: e.target.value
        })}></Input>
      </p>

      <p>First Name: {state.fName}</p>
      <p>Last Name: {state.lName}</p>
      <p>Username: {state.username}</p>
      <p>Password: {state.password}</p>

    </main >
  );
}
