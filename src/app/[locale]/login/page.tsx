"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, Input } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

export default function Home() {
  const router = useRouter();
  const validationSchema = z.object({
    username: z.string().min(1, { message: "Email é obrigatório" }).email({
      message: "Email inválido",
    }),
    password: z.string().min(1, "Senha obrigatória"),
  });

  type Login = z.infer<typeof validationSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: zodResolver(validationSchema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<Login> = (data) => {
    setLoading(true);
    console.log(data);

    setTimeout(() => {
      setLoading(false);
      router.push("/");
    }, 3000);
  };

  return (
    <main className="h-screen w-screen">
      <div className="flex size-full bg-white lgMax:flex-col lgMax:gap-4">
        <div className="w-1/2 flex justify-center items-center lgMax:w-full p-4">
          <Image
            src={"/logo.svg"}
            width={32}
            height={32}
            alt="Moon"
            className="size-96 lgMax:size-32"
          />
        </div>
        <div className="w-1/2 size-full bg-black flex flex-col items-center justify-center lgMax:w-full p-4 lgMax:rounded-t-3xl  text-white">
          <div className="flex flex-col  items-center justify-center rounded-xl p-8 border-1 lgMax:border-none lgMax:p-0">
            <header className="flex flex-col items-center mb-4 gap-2">
              <h1 className="text-4xl ">Entrar</h1>
              <Link href={"/"}>Não sss possui conta? Cadastre-se</Link>
            </header>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-start gap-5"
            >
              <Input
                {...register("username")}
                type="email"
                label="Email"
                placeholder="Insira o email"
                errorMessage={errors.username?.message}
                variant="faded"
              />
              <Input
                {...register("password")}
                type="password"
                label="Senha"
                placeholder="Insira a senha"
                errorMessage={errors.password?.message}
                variant="faded"
              />
              <span className="flex justify-end w-full">
                <Link href={"/"}>Esqueceu sua senha?</Link>
              </span>

              <Checkbox
                className="text-white"
                color="secondary"
                defaultSelected
              >
                Lembrar-me
              </Checkbox>
              <Button
                type="submit"
                className="w-full"
                color="secondary"
                variant="shadow"
                isLoading={loading}
              >
                {loading ? "" : "Entrar"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
