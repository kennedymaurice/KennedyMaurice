import { Helmet } from "react-helmet-async";

const SITE_NAME = "Kennedy Maurice";
const SITE_URL = "https://www.kennedymaurice.co.ke";

const SEO = ({
    title,
    description = "Kennedy Maurice helps healthcare businesses, institutions, entrepreneurs, and service-based organizations establish, digitize, comply, procure, market, and grow.",
    path = "",
    image = "/kennedy-maurice.webp",
    type = "website",
    schema,
}) => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    const canonicalUrl = `${SITE_URL}${path}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />

            <link rel="canonical" href={canonicalUrl} />
            <meta name="robots" content="index, follow" />

            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={`${SITE_URL}${image}`} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${SITE_URL}${image}`} />

            {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
        </Helmet>
    );
};

export default SEO;
