import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from '@design-system/core';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
        <div className='flex flex-col items-center gap-8'>
          <h1 className='text-4xl font-bold text-center'>
            Design System Web App
          </h1>
          <p className='text-lg text-center text-muted-foreground'>
            Built with Next.js 15 and our design system components
          </p>
          <div className='flex gap-4'>
            <Accordion collapsible className='w-96' type='single'>
              <AccordionItem value='item-1'>
                <AccordionTrigger>What is this component?</AccordionTrigger>
                <AccordionContent>
                  This is an accordion component built with Radix UI primitives
                  and styled with Tailwind CSS.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-2'>
                <AccordionTrigger>How do I use it?</AccordionTrigger>
                <AccordionContent>
                  Import the accordion components and compose them together to
                  create collapsible content sections.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-3'>
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes! Built on Radix UI primitives, it follows WAI-ARIA design
                  patterns and provides keyboard navigation support.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <p className='text-sm text-muted-foreground'>
            This is a simple example of using our design system components in a
            Next.js application.
          </p>
          <Button className='w-fit' size='lg' variant='default'>
            <span>Click Me</span>
          </Button>
        </div>
      </div>
    </main>
  );
}
