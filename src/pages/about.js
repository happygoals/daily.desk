import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"

const AboutPage = ({ data }) => (
  <Layout>
    <SiteMetadata title="About" description="Sample description" />

    <div className="bg-gray-100">
      <div className="container py-12 lg:pb-16">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Hello, all home workers.
            </h1>

            <h2 className="text-xl leading-tight font-semibold tracking-tight text-green-600 sm:text-2xl">
            Welcome to the <em>daily.desk</em>! 
            </h2>
            <div className="mt-4 leading-loose">
            This is my side project where people can put the photo of their desk
            so that we can have photos of desks from who work from home!
            <br />
            <br />
            It would be nice way to inspire each other.
            Go ahead upload the photo of your desk now! 
            Cheers!
            <br />
            <br />
              I'm happy to hear from you:
              <br />
              <a
                href="mailto:developer.haemin.ryu@gmail.com"
                className="border-b border-gray-500 hover:border-green-600 hover:text-green-600"
              >
                developer.haemin.ryu@gmail.com
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-2/5 md:pl-12">
            <Img
              fluid={data.author.childImageSharp.fluid}
              alt="Haemin Ryu"
              className="rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    author: file(relativePath: { eq: "author.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 480, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
