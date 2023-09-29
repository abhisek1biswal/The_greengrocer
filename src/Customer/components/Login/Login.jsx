import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
   
  export default function SimpleRegistrationForm() {
    const navigate=useNavigate();
    return (
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to signin
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Name" />
            <Input size="lg" label="Email" />
            <Input type="password" size="lg" label="Password" />
          </div>
          
          <Button className="mt-6 h-10 text-lg bg-green-500" fullWidth onClick={()=>{
      navigate("/home");
    }}>
            signin
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}
            <a
              href="app.js"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign Up
            </a>
          </Typography>
        </form>
      </Card>
    );
  }