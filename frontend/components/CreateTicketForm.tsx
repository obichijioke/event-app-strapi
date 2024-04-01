"use client";
import React from "react";
import { ticketSchema } from "@/lib/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const CreateTicketForm = () => {
  const form = useForm<z.infer<typeof ticketSchema>>({
    resolver: zodResolver(ticketSchema),
    defaultValues: {
      limitPerUser: 0,
      availability: 0,
      availabilitySwitch: false,
      limitPerUserSwitch: false,
    },
  });
  const numberOfTickets = form.watch("availabilitySwitch");
  const MaxLimitPerUser = form.watch("limitPerUserSwitch");

  function onSubmit(data: z.infer<typeof ticketSchema>) {
    const newData = {
      ...data,
      availability: data.availabilitySwitch ? 0 : data.availability,
      limitPerUser: data.limitPerUserSwitch ? 0 : data.limitPerUser,
    };
    console.log(newData);
  }
  return (
    <div className="w-full py-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ticket Name</FormLabel>
                <FormControl>
                  <Input placeholder="Event Ticket Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="p-4 border border-gray-200 rounded-lg">
            <p className="font-medium my-2 text-gray-700">
              Ticket Restrictions
            </p>
            <div className="p-4">
              <FormField
                control={form.control}
                name="availabilitySwitch"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">
                        Total number of tickets available
                      </FormLabel>
                    </div>
                    <FormControl>
                      <div className="flex gap-2 items-center">
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          aria-readonly
                        />
                        <FormDescription>Unlimited</FormDescription>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
              {!numberOfTickets && (
                <div className="pt-2">
                  <FormField
                    control={form.control}
                    name="availability"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter total tickets"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
            </div>

            <Separator />
            <div className="p-4">
              <FormField
                control={form.control}
                name="limitPerUserSwitch"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">
                        Maximum number of tickets for each customer
                      </FormLabel>
                    </div>
                    <FormControl>
                      <div className="flex gap-2 items-center">
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          aria-readonly
                        />
                        <FormDescription>Unlimited</FormDescription>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
              {!MaxLimitPerUser && (
                <div className="pt-2">
                  <FormField
                    control={form.control}
                    name="limitPerUser"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter max. per order"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
            </div>
          </div>
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input placeholder="10" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ticket Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your ticket in a few sentences."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateTicketForm;
