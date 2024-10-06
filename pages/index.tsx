import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { GithubIcon, Link, LinkedinIcon, MailIcon, PartyPopper } from "lucide-react";
import { NextSeo } from "next-seo";
import NextLink from "next/link";

export default function Home() {
  return (
    <>
      <NextSeo title={`Muhammad Fahri Ramadhan - Software Engineer`} />
      <Card className="pt-12 pb-4">
        <CardHeader className="flex flex-col items-center gap-y-2">
          <Avatar className="size-28">
            <AvatarImage src="/images/avatar.png" className="rounded-full" />
            <AvatarFallback>MFR</AvatarFallback>
          </Avatar>
          <CardTitle className="font-bold text-2xl">Muhammad Fahri Ramadhan</CardTitle>
          <div className="flex gap-4 text-white">
            <NextLink href="https://github.com/fahri-r" className="border rounded-full p-2 hover:bg-white hover:text-black">
              <GithubIcon className="size-5" />
            </NextLink>
            <NextLink href="https://www.linkedin.com/in/fahri-r" className="border rounded-full p-2 hover:bg-white hover:text-black">
              <LinkedinIcon className="size-5" />
            </NextLink>
            <NextLink href="https://www.instagram.com/fahriramadhannnn" className="border rounded-full p-2 hover:bg-white hover:text-black">
              <InstagramLogoIcon className="size-5" />
            </NextLink>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-4 text-white">
          <Separator className="mb-5" />
          <div className="flex gap-2 items-center">
            <Link className="size-4" />
            <h1 className="text-xl font-bold">Links</h1>
          </div>
          <NextLink href="https://fahri-r.com">
            <Button className="w-full h-12" variant={"outline"}>Personal Website & Portfolio</Button>
          </NextLink>
          <NextLink href="https://www.canva.com/design/DAF8ETKJ1T4/LiFES0swzMrdr6ke9sYuGA/edit?utm_content=DAF8ETKJ1T4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
            <Button className="w-full h-12" variant={"outline"}>Resume & Curriculum Vitae</Button>
          </NextLink>
        </CardContent>
        <CardFooter className="flex flex-col gap-y-4 text-white">
          <Separator className="mb-5" />
          <div className="flex gap-2 items-center">
            <PartyPopper className="size-4" />
            <h1 className="text-xl font-bold">Get in touch</h1>
          </div>
          <div className="flex flex-col gap-2 border p-4 rounded-md bg-secondary-foreground">
            <MailIcon />
            <h2 className="text-xl font-bold">Drop me an Email</h2>
            <p>00.fahri.r@gmail.com</p>
            <h3>Expect my rapid and eager reply – your message won't be kept waiting!</h3>
          </div>
        </CardFooter>
      </Card >
    </>
  );
}
