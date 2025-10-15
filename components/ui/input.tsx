
import React from "react";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} />;
}

export function InputDemo() {
  return <Input type="email" placeholder="Email" />;
}

