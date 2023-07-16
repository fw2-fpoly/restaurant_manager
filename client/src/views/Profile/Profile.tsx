import { Badge, Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, FormControl, FormLabel, Heading, Image, Img, Input, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import { Link, NavLink } from 'react-router-dom';
import { UserIcon, PassIcon, LogoutIcon } from '~/components/Icons';
import { useState } from 'react';

type Props = {}

interface ILinks {
    title: string;
    path: string;
    icon: any;
}


const links: ILinks[] = [
    {
        title: "Personal Infomation",
        path: "/",
        icon: UserIcon,
    },
    {
        title: "Login & Password",
        path: "/table",
        icon: PassIcon,
    },
    {
        title: "Logout",
        path: "/history",
        icon: LogoutIcon,
    }

];

const Profile = (props: Props) => {
    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
    }

    const [value, setValue] = useState('')
    const handleChange = (event: any) => setValue(event.target.value)


    return (
        <Flex
            w="full"
            direction="row"
            gap="6"
        >
            <Card maxW="1000px" p="20px" m="20px" >
                <CardBody>
                    <Img
                        borderRadius="full"
                        boxSize="160px"
                        objectFit="cover"
                        objectPosition="top"
                        mx="auto"
                        my="auto"
                        src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg"
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md' mx="auto">Rose Sadan</Heading>
                        <Text mx="auto">
                            Raasi Kash
                        </Text>

                        <div>
                            {links?.map((link: ILinks, index: number) => {
                                const Icon = link.icon;
                                return (
                                    <Link
                                        as={NavLink}
                                        to={link.path}
                                        key={index}
                                        role="group"
                                        w="full"
                                        gap={1}
                                        rounded={8}
                                        transition="all 0.25s ease"
                                        _hover={{
                                            bg: "#ea6a121a",
                                            textDecoration: "none",
                                        }}
                                        _activeLink={{
                                            "& button": {
                                                color: "primary.100",
                                                bgColor: "#ea6a121a",
                                            },
                                            "& svg": {
                                                color: "primary.100",
                                            },
                                        }}
                                    >
                                        <Button
                                            w="full"
                                            size="lager"
                                            color="text.300"
                                            fontWeight="semibold"
                                            textDecoration="none"
                                            bgColor="white"
                                            justifyContent="flex-start"
                                            _groupHover={{
                                                color: "primary.100",
                                                bgColor: "#ea6a121a",
                                            }}
                                            _groupActive={{
                                                color: "primary.100",
                                                bgColor: "#ea6a121a",
                                            }}
                                            leftIcon={
                                                <Icon
                                                    boxSize="5"
                                                    color="text.300"
                                                    _groupHover={{
                                                        color: "primary.100",
                                                    }}
                                                    _groupActive={{
                                                        color: "primary.100",
                                                    }}
                                                />
                                            }
                                        >
                                            {link.title}
                                        </Button>
                                    </Link>
                                );
                            })}
                        </div>

                    </Stack>
                </CardBody>


            </Card>
            <Box maxW='2000px' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Image src={property.imageUrl} alt={property.imageAlt} />

                <Box p='6'>
                    <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                            New
                        </Badge>
                        <Box
                            color='gray.500'
                            fontWeight='semibold'
                            letterSpacing='wide'
                            fontSize='xs'
                            textTransform='uppercase'
                            ml='2'
                        >
                            {property.beds} beds &bull; {property.baths} baths
                        </Box>
                    </Box>

                    <>
                        <Text mb='8px'>Value: {value}</Text>
                        <Input
                            value={value}
                            onChange={handleChange}
                            placeholder='Here is a sample placeholder'
                            size='sm'
                        />
                    </>

                    <Box>
                        {property.formattedPrice}
                        <Box as='span' color='gray.600' fontSize='sm'>
                            / wk
                        </Box>
                    </Box>

                    <Box display='flex' mt='2' alignItems='center'>
                        {Array(5)
                            .fill('')
                        }
                        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                            {property.reviewCount} reviews
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}

export default Profile