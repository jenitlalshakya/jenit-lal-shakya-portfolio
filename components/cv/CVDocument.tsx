import { Fragment } from "react";
import { Document, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { cvData } from "@/data/cvData";

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 52,
    paddingVertical: 36,
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.35,
    color: "#000000",
    backgroundColor: "#ffffff",
  },
  header: {
    marginBottom: 4,
  },
  name: {
    fontFamily: "Helvetica-Bold",
    fontSize: 22,
    color: "#000000",
  },
  headline: {
    marginTop: 16,
    lineHeight: 1.6,
    fontSize: 11,
    color: "#000000",
  },
  contact: {
    marginTop: 10,
  },
  contactLine: {
    fontSize: 9,
    color: "#000000",
    lineHeight: 1.6,
  },
  contactLink: {
    color: "#000000",
    textDecoration: "none",
  },
  section: {
    marginTop: 12,
  },
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    letterSpacing: 1.4,
    textTransform: "uppercase",
    color: "#000000",
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    borderBottomStyle: "solid",
    paddingBottom: 3,
    marginBottom: 5,
  },
  entry: {
    marginBottom: 5,
    breakInside: "avoid",
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  entryTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10.5,
    color: "#000000",
    flex: 1,
    paddingRight: 12,
  },
  entryMeta: {
    fontSize: 9,
    color: "#000000",
    textAlign: "right",
  },
  entryMetaLink: {
    color: "#000000",
    textDecoration: "none",
  },
  entrySubtitle: {
    marginTop: 1,
    fontSize: 9.5,
    color: "#000000",
  },
  entryBody: {
    marginTop: 3,
    fontSize: 9.5,
    color: "#000000",
  },
  entryTags: {
    marginTop: 2,
    fontSize: 8.5,
    color: "#000000",
  },
  skillRow: {
    flexDirection: "row",
    marginBottom: 3,
  },
  skillLabel: {
    fontFamily: "Helvetica-Bold",
    width: 72,
    fontSize: 9.5,
    color: "#000000",
  },
  skillList: {
    flex: 1,
    fontSize: 9.5,
    color: "#000000",
  },
});

const MetaLink = ({ href, children }: { href: string; children: string }) => (
  <Link src={href} style={styles.entryMetaLink}>
    {children}
  </Link>
);

export const CVDocument = () => (
  <Document
    title={`${cvData.name} — Curriculum Vitae`}
    author={cvData.name}
    subject="Curriculum Vitae"
  >
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>{cvData.name}</Text>
        <Text style={styles.headline}>{cvData.headline}</Text>
        <View style={styles.contact}>
          <Text style={styles.contactLine}>
            <Link
              src={`mailto:${cvData.email}`}
              style={styles.contactLink}
            >
              {cvData.email}
            </Link>
            {"  ·  "}
            {cvData.location}
          </Text>
          <Text style={styles.contactLine}>
            <Link
              src={`tel:${cvData.phone.replace("-", "")}`}
              style={styles.contactLink}
            >
              {cvData.phone}
            </Link>
          </Text>
          <Text style={styles.contactLine}>
            {cvData.links.map((link, index) => (
              <Fragment key={link.href}>
                {index > 0 ? "  ·  " : null}
                <Link src={link.href} style={styles.contactLink}>
                  {link.text}
                </Link>
              </Fragment>
            ))}
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile</Text>
        <Text style={styles.entryBody}>{cvData.summary}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        {cvData.education.map((item) => (
          <View key={`${item.degree}-${item.institution}`} style={styles.entry}>
            <View style={styles.entryHeader}>
              <Text style={styles.entryTitle}>{item.degree}</Text>
              <Text style={styles.entryMeta}>
                {item.startYear} – {item.endYear}
              </Text>
            </View>
            <Text style={styles.entrySubtitle}>
              {item.institution}, {item.location}
            </Text>
            {item.description ? (
              <Text style={styles.entryBody}>{item.description}</Text>
            ) : null}
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        {cvData.skillCategories.map((category) => (
          <View key={category.title} style={styles.skillRow}>
            <Text style={styles.skillLabel}>{category.title}</Text>
            <Text style={styles.skillList}>{category.skills.join(", ")}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>
        {cvData.projects.map((project) => (
          <View key={project.title} style={styles.entry}>
            <View style={styles.entryHeader}>
              <Text style={styles.entryTitle}>{project.title}</Text>
              <Text style={styles.entryMeta}>
                {project.liveUrl ? (
                  <MetaLink href={project.liveUrl}>Live</MetaLink>
                ) : null}
                {project.liveUrl && project.githubUrl ? "  ·  " : null}
                {project.githubUrl ? (
                  <MetaLink href={project.githubUrl}>Code</MetaLink>
                ) : null}
              </Text>
            </View>
            <Text style={styles.entryBody}>{project.description}</Text>
            <Text style={styles.entryTags}>{project.tags.join(" · ")}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);
