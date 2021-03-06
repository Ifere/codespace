import React from 'react';
import { Flex, Box, Text, Image, Button, Link } from '@chakra-ui/react'
import { BellIcon, ArrowLeftIcon } from '@chakra-ui/icons'
import { Sidebar } from '../../components/Sidebar'
import { Formik, Form, Field } from 'formik';
import { SelectField } from '../../components/SelectField'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setTest } from '../../features/Slices/testSlice';


interface selectTestProps {

}

export const selectTest: React.FC<selectTestProps> = ({ }) => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    // const course = useAppSelector(state => state.test.course)
    // const language = useAppSelector(state => state.test.language)
    
    return (
        <Flex>
            <Sidebar active="home" />
            <Flex
                height='100vh'
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
                        minHeight="calc(100vh - 110px)"
                        mt="20px"
                        p="20px"
                    >
                        <Box>
                            <Text> Take Test </Text>
                            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit reprehenderit odio non facilis, doloribus eaque aspernatur exercitationem explicabo consequuntur ratione labore repellat placeat ad nisi error obcaecati adipisci optio modi.</Text>
                        </Box>
                    </Flex>

                    {/* right menu */}
                    <Flex direction="column"
                        width="67.5%"
                        mt="40px"
                        justifyContent="flex-start"
                    >
                        <Text>
                            Select course and language
                        </Text>
                        <Box w="500px" mt={6}>
                            <Formik initialValues={{  }}
                                onSubmit={async ({  }) => {
                                    // console.log(course, language)
                                    router.push('/student/test')
                                }}

                            >
                                {({ isSubmitting }) => (
                                    <Form>
                                        {/* <SelectField name="class"
                                            value={course}
                                            placeholder="Select class"
                                            label="Class"
                                            options={['EEG501', 'EEG502']}
                                            onChange={(e) => dispatch(setCourse(e.target.value))}
                                        />
                                        <Box mt={4}>
                                            <SelectField name="language"
                                                value={language}
                                                placeholder="Select language"
                                                label="Language"
                                                options={["python", "javascript", "go", "java", "cpp", "php", "sql"]}
                                                onChange={(e) => dispatch(setLanguage(e.target.value))}
                                            />
                                        </Box> */}

                                        <Button
                                            mt={9}
                                            type="submit"
                                            isLoading={isSubmitting}
                                            width="240px"
                                        >
                                            TAKE TEST
                                        </Button>

                                    </Form>
                                )}
                            </ Formik>
                        </Box>

                    </Flex>
                </Flex>
            </Flex>

        </Flex >
    );
}

export default selectTest