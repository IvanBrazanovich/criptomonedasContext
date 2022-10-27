import React from "react";
import { Formik, Form, Field } from "formik";
import database from "../app/db.json";

const Formulario = () => {
  console.log(database);
  return (
    <section className="w-1/2">
      <h3 className="text-3xl text-white font-black text-center py-2 border-b-2 border-white ">
        Cotizar Criptomonedas al instante
      </h3>

      <Formik
        initialValues={{
          moneda: "",
          criptomoneda: "",
        }}
        onSubmit={(values) => {
          console.log("Hola", values);
        }}
      >
        <Form className="px-2 mt-7">
          <label
            className=" mb-3 block text-2xl font-semibold text-white "
            htmlFor="moneda"
          >
            Elige tu moneda
          </label>
          <Field
            as="select"
            name="moneda"
            id="moneda"
            className="mb-7 block py-2 px-4 w-full rounded-sm text-gray-700 font-semibold"
          >
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>

          <label
            className=" mb-3 block text-2xl font-semibold text-white"
            htmlFor="criptomoneda"
          >
            Elige la cripotomoneda:{" "}
          </label>
          <Field
            as="select"
            name="criptomoneda"
            id="criptomoneda"
            className="mb-7 block py-2 px-4 w-full rounded-sm text-gray-700 font-semibold"
          >
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>
          <button
            type="submit"
            className="w-full block py-1 text-center uppercase text-white text-xl font-extrabold bg-indigo-400"
          >
            Cotizar
          </button>
        </Form>
      </Formik>
    </section>
  );
};

export default Formulario;
