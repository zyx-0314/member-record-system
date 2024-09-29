"use client"

import HeaderNav from "@/components/elements/header";
import { Button } from "@/components/ui/button";
import { useEffect, useReducer, useState } from "react";

// useReducer
interface ReducerProps {
  type: 'SET_NAME' | 'SET_EMAIL' | 'SET_PASSWORD' | ''
  payload: string
}

export default function AboutPage() {
  // useState
  const [likeCount1, setLikeCount1] = useState<number>(0);
  const [likeCount2, setLikeCount2] = useState<number>(0);

  // useReducer
  const requiredDataInitialState = {
    name: '',
    email: '',
    password: ''
  };

  // useEffect
  const [likeCount1Listener, setLikeCount1Listener] = useState<number>(0);

  // useState
  const AddCounter = () => {
    setLikeCount1(likeCount1 + 1);
  };

  // useReducer
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

  // useReducer
  const [state, dispatch] = useReducer(SetDataOfReducer, requiredDataInitialState);

  // useEffect
  useEffect(() => {
    setLikeCount1Listener(likeCount1Listener + 1);
  }, [likeCount1]);

  return (
    <main>
      <HeaderNav
        activeNav={"About"}
      />
      {/* This is used only for demo in Hooks */}
      {/* useState */}
      <Button onClick={AddCounter}>1. Like ({likeCount1})</Button>
      <Button onClick={() => setLikeCount2(likeCount2 + 1)}>2. Like ({likeCount2})</Button>
      {/* useEffect */}
      <p>Like Count 1 Changes: {likeCount1Listener}</p>
      <br />
      {/* useReducer */}
      <form className="flex flex-col gap-2">
        <input className="bg-white"
          value={state.name}
          onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
        />
        <input className="bg-white"
          value={state.email}
          onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
        />
        <input className="bg-white"
          value={state.password}
          onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })}
        />
      </form>
      <p>
        Name: {state.name} <br />
        Email: {state.email} <br />
        Password: {state.password}
      </p>
    </main >
  );
}
