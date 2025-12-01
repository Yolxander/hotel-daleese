'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Cormorant_Garamond } from 'next/font/google'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '700'] })

export function SuitesGalleryComponent() {
    const suites = [
        {
            id: 1,
            image: 'https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673de7f757eec.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=xmIq7hcYG10JPoGk1jeSnVzw7AoWbyNDxJZe1TYW0%2FVWyCwGag73BagvNVJy0ven6OxqP3V1S80k4oGCKavMTH9VYhr6eLQxNhB%2FsPHKbg71EhvcD5Zt1BfJUj1%2BEcJKbr%2FrwU1uu0i%2BDJzaaN0BQnevMPpKzglHJc%2FAThh5FW6cU61FBdUcn%2F4iorfRxzhQZRgqm0WaYxUfrWUDqmaGGBpUNh%2FnwbAWJenFy80ckTdk5SvbLTK7EBAODhRF14qY6oa4djGNCNVTtQPBAoS4ipGk4VBjk6xaLPLOQGbyTxUJOjvi0gyBBDK03HkY5S5YrH2H1fIhFYsfal9LkbueTg%3D%3D',
            alt: 'Exterior view of Suite 1 with pink walls and tropical plants',
        },
        {
            id: 2,
            image: 'https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e436317fc5.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=wPy%2B75nE0xgHnqX%2FXJLh9S4XG0419GSV79t3auEolT0aM1amX%2FcR%2BSuJutMp0bc%2FdDU3xnF7j27ldu8D4sODdobEBrG9MqLX7GRM9obtb%2FR0pWUkOneY2vZYQMdaNEcTi9yi%2B6YiGD%2BbTT53Va73iCPpcScYBAC9wwK778fUNqXpzypaUnh%2Ftjb67pT8PRoVOndDYNJ7UZjhLwGVG80LdzhtLOPWdquF7OiRNH0ywGXAEENzq7%2BMrt0ElnE2Lim04s9xzlwCz3hU02Q6NUMkBhWrsHL45TE1Br0lnN7xXZcDCgkl7M4obgnCdwlhsGQpE52bH6SW%2FZFzMPQbyzNFqQ%3D%3D',
            alt: 'Interior view of Suite 2 kitchen with terrazzo countertop',
        },
        {
            id: 3,
            image: 'https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673e4d0c2e3b8.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=YbIbtugDw4BXjelgsOlUOQQrhjX1NqO58mP0l0Au85Bjk1DG5hvFu0sCn36JnPmmgheC22wNC02ryM5WFfKBoyIteoZA%2BMAo5i0oaUnY1fYwheodUG2Q0g04%2By0FTP4hFAIbOcNx5ASczTm%2B6Sa2AAA%2BtsG%2Fs3MGFXI6dZ7OswRLU7xnp7hcdxWjfWBhcpRKhL9%2FfnfRd20GIEX6mcpMHJ9%2FLzNgQnmmp4dTL03NrHREEnWANSO%2FH47cOIeourvZ16KCWapO0s4Uyp7mKxau00FGswJJc4ZVpPOSh%2Fuw8dUNcCGa0uAKkpC%2BuNWJuP2WlS8tQchciwlu3ZG1vXeCSw%3D%3D',
            alt: 'Interior view of Suite 3 bedroom with wooden slat wall',
        },
        {
            id: 4,
            image: 'https://storage.googleapis.com/sempre-studios-893c8.appspot.com/default/uploads/673eab71dbb9c.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=16447035600&Signature=lbP%2FkVVtn6i3fYWjPhvlLpv%2BDmDpTLAB3V%2FnY6bIDl6jGUS14rsx1m0rn1ULT0UVVATnffShDsT8e4tVr3Oe6NVAYacLSRb2whJZM4Y5Vp71DbBiBGtPhLVZbJDrE7em4KJvRNOK6xdoOpotUJ5J9k8WSlMYzCu%2F1bNph9v2hC24juM28sO%2BZmna1j9fD%2FGu7arNcbZR4ybGTu7G7Vv5n70j5A3do2QsyETqbqKCgxxSf0buRRvxBIhEiYKpTvusCljdreqL3lwsdfoPlqsj9gRUMbjifgJ%2B6AHVP7s0%2FqHB20sAu9UGeR6XtntmSutTncAs7M6PoH0zHx%2FWxOJtcQ%3D%3D',
            alt: 'Interior view of Suite 4 bedroom with wooden slat wall',
        },
    ]

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.3,
                            },
                        },
                    }}
                >
                    {suites.map((suite) => (
                        <Link href={`/suites/suite-${suite.id}`} key={suite.id}>
                            <motion.div
                                className={`flex flex-col items-left cursor-pointer group ${cormorantGaramond.className}`}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.6,
                                            ease: 'easeOut',
                                        },
                                    },
                                }}
                            >
                                {/* Centering and Scaling Adjustments */}
                                <div className="relative overflow-hidden flex justify-center items-center h-[60vh] bg-gray-100">
                                    <Image
                                        src={suite.image}
                                        alt={suite.alt}
                                        width={600}
                                        height={600}
                                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                        unoptimized={suite.image.includes('storage.googleapis.com') && suite.image.includes('Signature=')}
                                    />
                                </div>
                                <motion.p
                                    className="mt-4 text-black text-xl group-hover:text-primary transition-colors duration-200"
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: {
                                                delay: 0.2,
                                                duration: 0.4,
                                            },
                                        },
                                    }}
                                >
                                    Suite {suite.id}
                                </motion.p>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
