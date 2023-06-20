"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
const prefix = "https://mohamednehad450.github.io/repoduction-app-dir";

export default function Test() {
  const router = useRouter();
  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <Link href={"/"}>{`<Link href={"/"}>`}</Link>
      <Link href={prefix + "/"}>{`<Link href={prefix + "/"}>`}</Link>
      <button
        onClick={() => router.push("/")}
      >{`<button onClick={() => router.push("/")}>`}</button>
      <button onClick={() => router.push(prefix + "/")}>
        {`<button onClick={() => router.push(prefix + "/")}>`}
      </button>
      <a href="/">{`<a href={"/"}> (doesn't work understandably)`}</a>
      <a href={prefix + "/"}>{`<a href={prefix + "/"}>`}</a>
    </main>
  );
}
