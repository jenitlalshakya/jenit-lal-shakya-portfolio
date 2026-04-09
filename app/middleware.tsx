import { NextResponse } from "next/server";

const Middleware = () => {
  return new NextResponse("Site under maintenane", { status: 503 });
}

export default Middleware;
