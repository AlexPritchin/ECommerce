import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const fontStyle = {
  fontFamily: 'Poppins',
  fontWeight: 400,
  fontSize: 14,
};

type BreadcumbsLinkItem = {
  href: string;
  title: String;
};

export interface BreadcrumbsViewProps {
  links: BreadcumbsLinkItem[];
  typographyTitle: String;
}

export const BreadcrumbsView: React.FC<BreadcrumbsViewProps> = ({
  links,
  typographyTitle,
}) => {
  return (
    <Breadcrumbs sx={{ alignSelf: 'flex-start' }}>
      {links.map(item => (
        <Link
          underline='hover'
          sx={{
            color: '#808080',
            ...fontStyle,
          }}
          href={item.href}
        >
          {item.title}
        </Link>
      ))}
      <Typography
        sx={{
          color: 'black',
          marginTop: '2px',
          ...fontStyle,
        }}
      >
        {typographyTitle}
      </Typography>
    </Breadcrumbs>
  );
};
