import type { NextPage } from 'next'
import Head from "next/head";
import Contact from "../components/Contact";
import Jumbotron from "../components/Jumbotron";
import Script from 'next/script';
import ProductList from '../components/ProductList';
import {IProduct} from '../components/Product';
import {GetStaticProps} from 'next'
import iphonex from '../public/iphone-x.png';
import iphone12 from '../public/iphone-12.png';
import iphone13 from '../public/iphone-13.png';


interface IproductListProps {
    products: IProduct[]
}

export default function Home({products}: IproductListProps) {
  return (
    <div>
        <Head>
            <title>iPhone Shop</title>
            <link rel="preconnect" href="https://app.snipcart.com"/>
            <link rel="preconnect" href="https://cdn.snipcart.com"/>
            <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"/>
        </Head>
        <main className='main'>
              <Jumbotron />
              <ProductList products={products} />
              <Contact />
        </main>
        <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"/>
        <div hidden id="snipcart" data-api-key="OWNlZTNlYmItZTU5OS00MmI4LThjOTAtMjY0NzAyYmI2ODAxNjM3NjIyMjY3MDMxMTIzMzUx"></div>
    </div>
  )
}

export const products: IProduct[] = [
    {
        id: '1',
        name: 'iPhone X',
        price: 300,
        description: "Superbe iPhone comme neuf",
        url: '/api/products/iphonex',
        image: iphonex
    },
    {
        id: '2',
        name: 'iPhone 12',
        price: 800,
        description: "Superbe iPhone comme neuf",
        url: '/api/products/iphone12',
        image: iphone12
    },
    {
        id: '3',
        name: 'iPhone 13',
        price: 1200,
        description: "Superbe iPhone comme neuf",
        url: '/api/products/iphone13',
        image: iphone13
    }
]

export const getStaticProps: GetStaticProps = async  (context) => {
    return {
        props: {
            products
        }
    }
}
