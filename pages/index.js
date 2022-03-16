import { useMediaQuery, Image, Box, Input, Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading, Icon, Button, useColorMode, Stack, InputGroup, InputLeftElement, Textarea, Flex, AspectRatio, Link } from '@chakra-ui/react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { IoCall, IoLocation, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoMail } from 'react-icons/io5'
import { BsFacebook, BsFillPeopleFill } from 'react-icons/bs'
import { ImFacebook2 } from 'react-icons/im'
export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  const [isMobile] = useMediaQuery("(max-width: 992px)")
  return (
    <Box className={styles.container} pt="20px" px={{ base: "20px", lg: "120px" }}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Breadcrumb separator='>' padding="10px 16px">
        <BreadcrumbItem>
          <BreadcrumbLink href='#' color="gray.700" fontWeight={500} fontSize="1rem" lineHeight={1.5}>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#' color="orange.400" fontWeight={700} fontSize="1rem" lineHeight={1.3}>
            Kontak Kami
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Heading mt="24px" as="h1" size="3xl" fontSize="48px" lineHeight={1.2}>Kontak Kami</Heading>
      {isMobile && <Box mt="30px">
        <Box display="flex">
          <Icon as={IoCall} w={6} h={6} color='orange.300' />
          <Text color="#2D3748" ml="10px" fontSize="0.875rem" fontWeight={500}>+62 851-5995-4161</Text>
        </Box>
        <Box mt="15px" display="flex">
          <Icon as={IoMail} w={6} h={6} color='orange.300' />
          <Text color="#2D3748" ml="10px" fontSize="0.875rem" fontWeight={500}>customer@sabilamall.co.id</Text>
        </Box>
      </Box>}
      <Box display="flex" flexDirection={{ base: "column", lg: "row" }} mt="24px">
        <Box minW="300px" maxW="360px">
          <AspectRatio ratio={4 / 3}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3005337337536!2d106.83741871530928!3d-6.355128695401127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69edea57fe727d%3A0xd91affb117d8be88!2sSabilaMall!5e0!3m2!1sid!2sid!4v1647133720192!5m2!1sid!2sid" allowFullScreen="true" loading="lazy">
            </iframe>
          </AspectRatio>
          <Flex mt="18px">
            <Icon as={IoLocation} w={8} h={8} color='orange.300' />
            <Box ml="18px">
              <Text fontWeight={500} color="gray.700" fontSize="14px" lineHeight="21px">
                Satria Building 2nd Lt 2 Unit A204-A206,
                Jl. Akses UI No.24-26, Tugu, Kec. Cimanggis, Kota Depok, Jawa Barat Depok Jawa Barat, 16451 Indonesia
              </Text>
              <Link target={`_blank`} href='https://www.google.com/maps/place/SabilaMall/@-6.355129,106.839607,15z/data=!4m5!3m4!1s0x0:0xd91affb117d8be88!8m2!3d-6.3551287!4d106.8396074?hl=id'>
                <Button mt="16px" color="orange.400" fontWeight={"bold"} borderColor="orange.400" variant="outline">Lihat di Google Maps</Button>
              </Link>
            </Box>
          </Flex>
        </Box>
        <Box display={"flex"} flexDirection={{base:"column-reverse", lg:"row"}}>
          <Box position="relative" ml={{base:"0", lg:"24px"}}>
            {!isMobile && <Box display="flex">
              <Box display="flex" alignItems="center">
                <Icon as={IoCall} w={6} h={6} color='orange.300' />
                <Text color="#2D3748" ml="10px" fontSize="0.875rem" fontWeight={500}>+62 851-5995-4161</Text>
              </Box>
              <Box ml="52px" display="flex" alignItems="center">
                <Icon as={IoMail} w={6} h={6} color='orange.300' />
                <Text color="#2D3748" ml="10px" fontSize="0.875rem" fontWeight={500}>customer@sabilamall.co.id</Text>
              </Box>
            </Box>}

            <Text mt="52px" fontWeight={700} fontSize="24px" lineHeight={1.3}>Tinggalkan Pesan</Text>
            <Stack spacing={4} mt="24px">
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  color='gray.400'
                >
                  <BsFillPeopleFill />
                </InputLeftElement>
                <Input type='text' placeholder='Nama Anda' />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  color='gray.400'
                >
                  <IoMail />
                </InputLeftElement>
                <Input type='text' placeholder='Alamat email' />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  color='gray.400'
                >
                  <IoCall />
                </InputLeftElement>
                <Input type='text' placeholder='Nomor telepon Anda' />
              </InputGroup>
              <Textarea
                placeholder='Tuliskan pesan Anda di sini'
                size='sm'
              />
            </Stack>
            <Button mx={{base:"5%", lg:""}} position="absolute" right="0" w={{base:"90%", lg:"160px"}} mt={4} color="#ffffff"  backgroundColor="red.500">Kirim</Button>

          </Box>
          <Box ml={{base:"0", lg:"24px" }} mt={{base:"32px", lg:"-40px"}}>
            <Image mx="auto" src={'icon.svg'} alt="mascot" />
            <Text mt="16px" fontWeight={700} fontSize="24px" textAlign={"center"} lineHeight={1.3} color="gray.700">Follow SabilaMall yuk!</Text>
            <Flex justifyContent="center" mt="12px">
              <Icon cursor={"pointer"} as={ImFacebook2} w={6} h={6} color='orange.400' />
              <Icon cursor={"pointer"} as={IoLogoTwitter} w={6} h={6} ml="12px" mr="6px" color='orange.400' />
              <Icon cursor={"pointer"} as={IoLogoInstagram} w={6} h={6} mr="12px" ml="6px" color='orange.400' />
              <Icon cursor={"pointer"} as={IoLogoLinkedin} w={6} h={6} color='orange.400' />
            </Flex>
          </Box>
        </Box>

      </Box>
    </Box>
  )
}
