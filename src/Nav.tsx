import { Box, Flex, Avatar, Text, useColorModeValue } from "@chakra-ui/react";
const NavBar = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "dark")} px={20}>
      <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
        <Flex dir="rtl" ml="9" mt="4">
          <Text fontSize="3xl">قُوتُ</Text>
        </Flex>
        <Avatar mb="4"
          size={"xl"}
          src={
            "https://attachment.outlook.live.net/owa/MSA%3Ashrouq.talhi%40hotmail.com/service.svc/s/GetAttachmentThumbnail?id=AQMkADAwATZiZmYAZC1mNTc0LTc2Y2ItMDACLTAwCgBGAAADiYsnsgb6AE2Ew%2BqD5Qm7VgcAvc5aD50YekO9YDu7zsDfbwAAAgEMAAAAvc5aD50YekO9YDu7zsDfbwAFWfY6PQAAAAESABAAC2UATGpLU0CYSOdybKq3qA%3D%3D&thumbnailType=2&isc=1&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IkQ4OThGN0RDMjk2ODQ1MDk1RUUwREZGQ0MzODBBOTM5NjUwNDNFNjQiLCJ0eXAiOiJKV1QiLCJ4NXQiOiIySmozM0Nsb1JRbGU0Tl84dzRDcE9XVUVQbVEifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2subGl2ZS5jb20iLCJ1YyI6Ijg2NTYzMjk3YTJmZDRiZDY4ODgxMjM3MDdhM2U1OTQ1IiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInB1aWRcIjpcIjE4OTk5NDczMjU5NDU1NDdcIixcInNjb3BlXCI6XCJPd2FEb3dubG9hZFwiLFwib2lkXCI6XCIwMDA2YmZmZC1mNTc0LTc2Y2ItMDAwMC0wMDAwMDAwMDAwMDBcIixcInByaW1hcnlzaWRcIjpcIlMtMS0yODI3LTQ0MjM2NS00MTE4MDUwNTA3XCJ9IiwibmJmIjoxNjcwNjcxNTI5LCJleHAiOjE2NzA2NzIxMjksImlzcyI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJhdWQiOiIwMDAwMDAwMi0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvYXR0YWNobWVudC5vdXRsb29rLmxpdmUubmV0QDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImhhcHAiOiJvd2EifQ.asJDr4KyAUHzW7ncRkUkU6XBjyYC3QX4LKc--h9ailSfPukZYDylimJRkICFR7IVOLL1Wj3JNcqugJ8Iy2q2w83Chk--scxWFqeidPl4PJPMGNUa-CCH0coWw758muNGmG_Ubt6NiCU1tgVybVXUg4_KpciksRvnRERuCV7KPhANtaqlqElu0Dz4OW9rmby-gucWrBFOdkEUunqiQaY-7U1NBW46R7hRfRE-xYkutBeMrE0s95kJwsnss3UNB_YnEFSnEyJtDygwQu3ZG7Zlga_VaEp6qDjGKxU5aAhGmiWJYlPyRVVOf-JBFzD6FmspV-hXAKk9ThdfAmMUBk4XFA&X-OWA-CANARY=co6oj5vFckGN53kIYQQ5llADH4Wh2toYfXmztW6EPYVcz1Ndop88cDT5FRi-HNIu23rpsM6dHrM.&owa=outlook.live.com&scriptVer=20221202007.12&animation=true"
          }
        />
      </Flex>
    </Box>
  );
};

export default NavBar;