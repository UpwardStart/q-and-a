import { Layout, SectionText, List, ListItem, Section, Heading, Container } from "../layout"

const BecomeATutorDescription = () => (
  <Container>
    <Heading variant="main">Become a Tutor</Heading>
    <Layout variant="row">
      <Section>
        <SectionText>
          Q&A Tutoring is always searching for capable, personable, and qualified tutors.  We believe our tutors are the most valuable assets to our business. If you believe you possess qualities that make you a desirable tutor we encourage you to apply!
        </SectionText>
        <SectionText>
          That being said, Q&A is very meticulous about choosing the people we work with. We aim to provide the highest possible standards of tutoring available to customers. To be considered as a candidate for Q&A Tutoring you must demonstrate with tangible proof your abilities to be an expert in your subject matter as well as showcase your ability to make students feel comfortable through your approachable and friendly personality. You will go through an examination process as well as two separate interviews to determine if you are a qualified prospect. We also require transcripts that show a high level of success in academics in order to solidify your proven expertise in the subject matter you are applying for.
        </SectionText>
        <SectionText>
          We are well aware of the extremely high value that a good, qualified tutor brings to the table. So to support such high standards we back our requirements up with extremely competitive compensation. We also realize that tutors of such standards are likely pursuing higher education or a career so in order to accommodate our tutors also set their own hours and have the right to a flexible schedule
        </SectionText>
        <SectionText>
          We look forward to hearing from you!
        </SectionText>
      </Section>
      <Section>
      <Layout variant="column">
        <List>
          <ListItem>Extremely thorough knowledge of subject matter</ListItem>
          <ListItem>Minimum GPA of 3.5 or higher</ListItem>
          <ListItem>Must have received A&apos;s in classes that relate to subject matter</ListItem>
          <ListItem>Ability to effectively communicate subject matter</ListItem>
          <ListItem>Application of different learning strategies</ListItem>
          <ListItem>Ability to listen and answer questions during tutoring sessions</ListItem>
          <ListItem>Set goals and expectations during the first few sessions</ListItem>
          <ListItem>Ability to be dynamic in tutoring approach, based on the student&apos;s learning style.</ListItem>
        </List>
        </Layout>
      </Section>
    </Layout>
  </Container>
)

export default BecomeATutorDescription
