import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

// Fetch all todos (GET method)
export async function GET() {
  try {
    const todos = await prisma.todo.findMany();
    return new Response(JSON.stringify(todos), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch todos' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// Create a new todo (POST method)
export async function POST(request: Request) {
  const { title, description, dueDate } = await request.json();

  try {
    const newTodo = await prisma.todo.create({
      data: {
        title,
        description,
        dueDate: dueDate ? new Date(dueDate) : null,
      },
    });
    return new Response(JSON.stringify(newTodo), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create todo' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// Delete a todo by id (DELETE method)

export async function DELETE(request: Request) {
    try {
      // Parse the body to get the ID
      const { id } = await request.json();
  
      if (!id) {
        return NextResponse.json(
          { error: "Todo ID is required" },
          { status: 400 }
        );
      }
  
      // Check if the todo exists
      const todo = await prisma.todo.findUnique({
        where: { id },
      });
  
      if (!todo) {
        return NextResponse.json(
          { error: "Todo not found" },
          { status: 404 }
        );
      }
  
      // Delete the todo
      await prisma.todo.delete({
        where: { id },
      });
  
      return NextResponse.json({ message: "Todo deleted successfully" });
    } catch (error) {
      return NextResponse.json(
        { error: "Failed to delete todo" },
        { status: 500 }
      );
    }
  }