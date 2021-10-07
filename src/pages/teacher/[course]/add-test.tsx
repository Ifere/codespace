import React from 'react';
import {
    Flex, Box, Text, Image, Button, Link,
    Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/react'
import { BellIcon, ArrowLeftIcon } from '@chakra-ui/icons'
import { Sidebar } from '../../../components/Sidebar'
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router'
import { SelectField } from '../../../components/SelectField'
import { InputField } from '../../../components/InputField'
import FunctionSignature from '../../../components/FunctionSignature'
import InitialCode from '../../../components/InitialCode';
import TestCases from '../../../components/TestCases'
import VerificationCode from '../../../components/VerificationCode'

interface addTestProps {

}

export const addTest: React.FC<addTestProps> = ({ }) => {
    const router = useRouter()

    return (
        <Flex>
            <Sidebar active="home" />
            <Flex
                width='100%'
                direction="column"
                justifyContent="flex-start"
                bgColor='white'
                pb="20px"
            >
                <Flex width='100%'
                    justifyContent='space-between'
                    py="20px"
                    px="20px"
                    alignItems="center"
                    borderBottom="2px solid #F0F0F0"
                >
                    <Button variant='link' onClick={() => router.back()}>
                        <Image src="/images/arrow-left.png" w="13px" h="12px" /> Go back
                    </Button>
                    <Link href="">
                        <Image src="/images/Bellicon.png" w="18px" h="21.6px" />
                    </Link>
                </Flex>

                <Flex justifyContent="space-between" mr="15px">
                    {/* left menu */}
                    <Flex direction="column"
                        bgColor="stroke"
                        width="30%"
                        h="calc(100vh - 110px)"
                        mt="20px"
                        p="20px"
                    >
                        <Box>
                            <Text> Test </Text>
                            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit reprehenderit odio non facilis, doloribus eaque aspernatur exercitationem explicabo consequuntur ratione labore repellat placeat ad nisi error obcaecati adipisci optio modi.</Text>
                        </Box>
                    </Flex>

                    {/* right menu */}
                    <Flex direction="column"
                        width="67.5%"
                        mt="20px"
                        justifyContent="space-between"
                    >
                        <Box w="100%" h="450px">
                            <Flex w="100%" justifyContent="space-between" alignItems="center">
                                <Text>Lecture 1 </Text>
                                <Button>Add Topic</Button>
                            </Flex>
                            <Box w="100%" p={2}>
                                <Flex><Text>Topic 1</Text></Flex>
                                <Flex w="100%" direction="column" justifyContent="flex-start">
                                    <InputField name="course title" label="Course Title" placeholder="Enter Course Title" />
                                    <InputField name="lecture video" label="Lecture Video" placeholder="Upload Lecture Video" />
                                    <InputField name="notes" label="Notes" placeholder="Some Explanation" />
                                </Flex>
                            </Box>
                            <Box w="100%" p={2} mt={4}>
                                <Flex><Text>Instructions</Text></Flex>
                                <InputField name="instructions" label="Instructions" placeholder="Some Explanations"/>
                            </Box>
                        </Box>

                        <Box>
                            <Tabs>
                                <TabList>
                                    <Tab
                                        _focus={{
                                            boxShadow:
                                                "none",
                                        }}
                                    >
                                        Function Signature
                                    </Tab>
                                    <Tab
                                        _focus={{
                                            boxShadow:
                                                "none",
                                        }}
                                    >
                                        Initial Code
                                    </Tab>
                                    <Tab
                                        _focus={{
                                            boxShadow:
                                                "none",
                                        }}
                                    >
                                        Test Cases
                                    </Tab>
                                    <Tab
                                        _focus={{
                                            boxShadow:
                                                "none",
                                        }}
                                    >
                                        Verification Code
                                    </Tab>
                                </TabList>

                                <TabPanels>
                                    <TabPanel>
                                        <FunctionSignature />
                                    </TabPanel>
                                    <TabPanel>
                                        <InitialCode />
                                    </TabPanel>
                                    <TabPanel>
                                        <TestCases />
                                    </TabPanel>
                                    <TabPanel>
                                        <VerificationCode />
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </Box>

                    </Flex>
                </Flex>
            </Flex>

        </Flex>
    );
}

export default addTest