import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export function Form() {
  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" type="email" color="failure" placeholder="name@flowbite.com" required helperText={
            <>
              <span className="font-medium">Alright!</span> Username available!
            </>
          } />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" type="password" required  helperText={
            <>
              <span className="font-medium">Alright!</span> Username available!
            </>
          }/>
      </div>

      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
}