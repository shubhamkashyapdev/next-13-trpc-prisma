import { httpBatchLink } from "@trpc/client";

import { appRouter } from "@/server/api/root";

export const serverClient = appRouter.createCaller({
  // @ts-ignore
  links: [
    httpBatchLink({
      url: "http://localhost:3000/api/trpc",
    }),
  ],
});
