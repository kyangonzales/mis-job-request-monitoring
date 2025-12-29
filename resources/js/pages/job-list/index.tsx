import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import Header from './Header';
import JobTable from './JobTable';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Job Lists',
        href: '/job-lists',
    },
];
function index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Job Lists" />
            <div className="flex flex-1 flex-col gap-4 p-4">
                <div className="rounded-xl border bg-background">
                    <Header />
                    <div className="overflow-x-auto">
                        <JobTable />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default index;
