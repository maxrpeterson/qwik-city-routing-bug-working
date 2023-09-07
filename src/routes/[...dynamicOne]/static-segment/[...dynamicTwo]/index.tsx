import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const routeInfo = useLocation();

  return (
    <>
      <h1>Expected page 👍</h1>
      <code>{JSON.stringify(routeInfo)}</code>
    </>
  );
});
