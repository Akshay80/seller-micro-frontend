import PublicFooter from '../../components/public-footer/public-footer';
import PublicHeader from '../../components/public-header/public-header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <PublicHeader />
            {children}
            <PublicFooter />
        </main>
    );
}