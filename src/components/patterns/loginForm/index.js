import React from "react";
import { useRouter } from "next/router";
import { Button } from "../../commons/Button";
import TextField from "../../forms/TextField";
// import { useForm } from "../../../infra/hooks/forms/useForm";
// import { loginService } from "../../../services/login/loginService";

function useForm(initialValues) {
  const [values, setValues] = React.useState(initialValues);

  return {
    values,
    handleSubmit() {},
    handleChange(e) {
      e.preventDefault();
      console.log(values);
      // console.log("target", values[e.target.name]);

      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });

      // setValues({
      //   usuario: "filho da puta",
      //   senha: "a",
      // });
    },
  };
}

export default function LoginForm() {
  const router = useRouter();
  const initialValues = {
    usuario: "",
    senha: "",
  };

  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      loginService
        .login({
          username: values.usuario, // 'omariosouto'
          password: values.senha, // 'senhasegura'
        })
        .then(() => {
          router.push("/app/profile");
        });
    },
  });

  return (
    <form id="formCadastro" onSubmit={form.handleSubmit}>
      <TextField
        placeholder="Usuário"
        name="usuario"
        value={form.values.usuario}
        onChange={form.handleChange}
      />
      <TextField
        placeholder="Senha"
        name="senha"
        type="password"
        value={form.values.senha}
        onChange={form.handleChange}
      />
      <Button
        type="submit"
        variant="primary.main"
        margin={{
          xs: "0 auto",
          md: "initial",
        }}
        fullWidth
      >
        Entrar
      </Button>
    </form>
  );
}
