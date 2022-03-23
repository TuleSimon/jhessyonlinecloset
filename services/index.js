import { GraphQLClient } from "graphql-request";

const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT);

export const getFloors = graphcms.request(
  `
    query Newest {
      productsConnection(orderBy: createdAt_DESC,, first: 6) {
        edges {
          cursor
          node {
            productDescription{
              markdown,
              text
            }
            categories {
              name
              id
            }
            id
            images {
              url(transformation: {image: {resize: {height: 400, width: 400}}})
            }
            name
            price
            rating
            slug
          }
        }
        aggregate {
          count
        }
      }
    }    
  `);


export const getWebsiteDetails = graphcms.request(
  `
  query MyQuery {
    websiteInformations {
      id
      businessName
      businessEmail
      businessDesc
      businessAddress
      aboutUs {
        markdown
      }
      contactUs {
        markdown
      }
      facebookhandle
      phoneNumber
      instagramHandle
      privacyPolicy {
        markdown
      }
      termsAndConditions {
        markdown
      }
      twitterHandle
      whatsappNumber
    }
  }  
  `
);


export const getFloorsBy =(order,name,page) => graphcms.request(
  `
    query Newest($order:ProductOrderByInput,$name:String) {
      productsConnection(orderBy: $order, where: {name_contains: $name}, first: 6,skip: ${(page-1)*6}) {
        edges {
          cursor
          node {
            productDescription{
              markdown,
              text
            }
            categories {
              name
              id
            }
            id
            images {
              url(transformation: {image: {resize: {height: 400, width: 400}}})
            }
            name
            price
            rating
            slug
          }
        }
        aggregate {
          count
        }
      }
    }    
  `,{order,name}
);


export const getFloorsByCategory =(order,slug,name,page) => graphcms.request(
  `
  query Newest($order:ProductOrderByInput, $slug:String, $name:String) {
      productsConnection(orderBy: $order, where: {categories_some: {slug: $slug},name_contains: $name},  first: 3,skip: ${(page-1)*6}) {
        edges {
          cursor
          node {
            productDescription{
              markdown,
              text
            }
            categories {
              name
              id
            }
            id
            images {
              url(transformation: {image: {resize: {height: 400, width: 400}}})
            }
            name
            price
            rating
            slug
          }
        }
        aggregate {
          count
        }
      }
    }    
  `,{order,slug,name}
);




export const getFloor = (slugs) =>
  graphcms.request(
    `query GetFloor($slugs: String) {
          products(where: {slug: $slugs}) {
            categories {
              name
              slug
            }
            name
            id
            images {
              url
            }
            price
            rating
            slug
            productDescription {
              markdown
              text
            }
          }
        }
        
      `,
    { slugs }
  );

export const getCategories = () =>
  graphcms.request(
    `query MyQuery {
          categories {
            id
            image {
              url(transformation: {image: {resize: {height: 400, width: 400}}})
            }
            name
            slug
            description
          }
        }
          
      `
  );


  export const getCategories2 = () =>
  graphcms.request(
    `query MyQuery {
          categories(first: 4) {
            name
            slug
          }
        }
          
      `
  );


export const submitComment = async (obj) => {
  const result = await fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return result.json();
};

export const getCategory = (slugs) =>
  graphcms.request(
    `query getCategory($slugs:String!) {
          category(where: {slug: $slugs}) {
            id
    image {
      url
    }
    name
    products {
      id
      images {
        url
      }
      name
      price
      rating
      slug
      productDescription {
        markdown,
        text
      }
    }
    slug
    description
          }
        }        
      `,
    { slugs }
  );
