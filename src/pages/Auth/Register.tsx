import {
  Button,
  CustomFlowbiteTheme,
  Flowbite,
  Label,
  TextInput,
  Checkbox,
} from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  const customTheme: CustomFlowbiteTheme = {
    button: {
      color: {
        primary:
          "bg-red-500 hover:bg-red-600 text-white transition-all duration-300",
      },
    },
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Flowbite theme={{ theme: customTheme }}>
        <form className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your email" />
            </div>
            <TextInput
              id="email2"
              type="email"
              placeholder="name@flowbite.com"
              required
              shadow
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput id="password2" type="password" required shadow />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="repeat-password" value="Repeat password" />
            </div>
            <TextInput id="repeat-password" type="password" required shadow />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree" className="flex">
              I agree with the&nbsp;
              <Link
                to="#"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                terms and conditions
              </Link>
            </Label>
          </div>
          <Link to="/login">
            <Button type="submit">Register new account</Button>
          </Link>
        </form>
      </Flowbite>
    </div>
  );
};
