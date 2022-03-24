export const testDataTemplate1 = [
  {
    name: "basicSample1",
    id: "1",
    values: {
      name: "Will",
      jobTitle: "Software Engineer",
      employer: "MLS",
    },
  },
  {
    name: "basicSample2",
    id: "2",
    values: {
      name: "Jim",
      jobTitle: "Sales Rep",
      employer: "Google",
      lineItems: [
        {
          value: "one",
        },
        {
          value: "two",
        },
      ],
    },
  },
  {
    name: "basicSample3",
    id: "3",
    values: {
      name: "Rory",
      jobTitle: "UX Designer",
      employer: "Netflix",
    },
  },
];

export const basicSample = [
  {
    name: "basicSample1",
    id: "1",
    template:
      "<h3>Hello, my name is {{name}}</h3>\n<p>I am a {{jobTitle}} at <b>{{employer}}</b></p><ul>{{#each lineItems}}<li>{{value}}</li>{{/each}}</ul>",
  },
];

export const testEvents = [
  {
    _id: "621523d6a10c9a1ede0b36d7",
    eventId: "7b1ebf8c-c543-4586-923f-b7744f0ef09f",
    eventType: "http-event",
    enabled: false,
    isVisible: false,
    name: "edi-214-failure-to-send-event",
    displayName: "Customer EDI 214 Failure",
    group: "EDI",
    templates: [
      {
        name: "edi-214-failure-to-send-event Email Template.",
        contentType: "Email",
        renderType: "Handlebars",
        components: [
          {
            name: "Subject",
            value: "Customer EDI 214 Failure",
            schema: {
              type: "object",
              properties: {},
            },
          },
          {
            name: "Body",
            value:
              "{{messageType}} {{messageValue}} for Order <a href={{loadUrl}}>{{orderId}}</a><br><br>\n<b>Customer :</b> {{customer}}<br><br>\n<b>Carrier :</b> {{carrier}}<br><br>\n<b>Origin :</b> {{origin}}<br><br>\n<b>Destination :</b>{{destination}}<br><br>\n<b>Associated Order Reps :</b> {{{associatedOrderReps}}}<br><br>\n<b>Associated Route Reps :</b> {{{associatedRouteReps}}}\n",
            schema: {
              type: "object",
              required: [
                "messageType",
                "messageValue",
                "loadUrl",
                "orderId",
                "customer",
                "carrier",
                "origin",
                "destination",
                "associatedOrderReps",
                "associatedRouteReps",
              ],
              properties: {
                messageType: {
                  type: "string",
                },
                messageValue: {
                  type: "string",
                },
                loadUrl: {
                  type: "string",
                },
                orderId: {
                  type: "string",
                },
                customer: {
                  type: "string",
                },
                carrier: {
                  type: "string",
                },
                origin: {
                  type: "string",
                },
                destination: {
                  type: "string",
                },
                associatedOrderReps: {
                  type: "string",
                },
                associatedRouteReps: {
                  type: "string",
                },
                jsonData: {
                  type: "string",
                },
              },
            },
          },
        ],
      },
    ],
  },
  {
    _id: "621523d6a10c9a1ede0b36db",
    eventId: "3eba0405-f994-48e3-96a9-3db6de521c10",
    eventType: "http-event",
    enabled: false,
    isVisible: false,
    name: "edi-990-customer-failure-event",
    displayName: "Customer 990 failure when customer ID is null",
    group: "EDI",
    templates: [
      {
        name: "edi-990-customer-failure-event Email Template.",
        contentType: "Email",
        renderType: "Handlebars",
        components: [
          {
            name: "Subject",
            value:
              "CustomerId is null for Order {{orderNumber}} of EDIType {{transactionId}}\r\n",
            schema: {
              type: "object",
              required: [],
              properties: {
                orderNumber: {
                  type: "string",
                },
                transactionId: {
                  type: "string",
                },
              },
            },
          },
          {
            name: "Body",
            value:
              "<div style='color: red;'>\r\nAlert - CustomerId is null for Order {{orderNumber}} of {{ediType}}\r\n</div><br>\r\n<pre><code>{{jsonData}}</code></pre><br>\r\n{{{footerContent}}}\r\n",
            schema: {
              type: "object",
              required: ["orderNumber"],
              properties: {
                orderNumber: {
                  type: "string",
                },
                jsonData: {
                  type: "string",
                },
                footerContent: {
                  type: "string",
                },
                ediType: {
                  type: "string",
                },
              },
            },
          },
        ],
      },
    ],
  },
];
