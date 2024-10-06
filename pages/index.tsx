import LucideIcon from "@/components/lucide-icon";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import profile from "@/constant/profile";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Link, MailIcon, PartyPopper } from "lucide-react";
import { NextSeo } from "next-seo";
import NextLink from "next/link";

export default function Home() {
  return (
    <>
      <NextSeo title={`${profile.name} - ${profile.job}`} />
      <Card className="pb-4">
        <div className="flex w-full justify-end p-2">
          <ModeToggle />
        </div>
        <CardHeader className="flex flex-col items-center gap-y-2">
          <Avatar className="size-28">
            <AvatarImage src={profile.imgUrl} className="rounded-full" />
            <AvatarFallback>{profile.initials}</AvatarFallback>
          </Avatar>
          <CardTitle className="font-bold text-2xl text-center">{profile.name}</CardTitle>
          <div className="flex gap-4 dark:text-white text-black">
            {
              profile.socials.map((x, i) => (
                <NextLink key={i} href={x.href} className="border rounded-full p-2 hover:bg-accent">
                  <LucideIcon name={x.icon} className="size-5" />
                </NextLink>
              ))
            }
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-4 dark:text-white text-black">
          <Separator className="mb-5" />
          <div className="flex gap-2 items-center">
            <Link className="size-4" />
            <h1 className="text-xl font-bold">Links</h1>
          </div>
          {
            profile.links.map((x, i) => (
              <NextLink key={i} href={x.href}>
                <Button className="w-full h-12" variant={"outline"}>{x.label}</Button>
              </NextLink>
            ))
          }
        </CardContent>
        <CardFooter className="flex flex-col gap-y-4 dark:text-white text-black">
          <Separator className="mb-5" />
          <div className="flex gap-2 items-center">
            <PartyPopper className="size-4" />
            <h1 className="text-xl font-bold">Get in touch</h1>
          </div>
          <div className="flex flex-col gap-2 border p-4 rounded-md bg-accent">
            <MailIcon />
            <h2 className="text-xl font-bold">Drop me an Email</h2>
            <p>{profile.email}</p>
            <h3 className="text-muted-foreground">Expect my rapid and eager reply – your message won&apos;t be kept waiting!</h3>
          </div>
        </CardFooter>
      </Card >
    </>
  );
}
