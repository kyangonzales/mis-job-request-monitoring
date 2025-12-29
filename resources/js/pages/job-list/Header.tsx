import JobForm from '@/components/JobForm';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import { Filter, Plus, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
interface Branch {
    id: number;
    name: string;
    code: string;
}
export default function Header() {
    const [branches, setBranches] = useState<Branch[]>([]);
    const [loading, setloading] = useState<boolean>(true);

    useEffect(() => {
        axios
            .get('branches')
            .then((response) => {
                setBranches(response.data);
                setloading(false);
            })
            .catch((error) => {
                console.error('Error fetching branches:', error);
                setloading(false);
            });
    }, []);

    return (
        <div className="flex flex-col gap-3 border-b p-4 md:flex-row md:items-center md:justify-between">
            {/* LEFT */}
            <h2 className="text-lg font-semibold">Job Lists</h2>

            {/* RIGHT */}
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
                {/* Search */}
                <div className="relative">
                    <Search className="absolute top-2.5 left-2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search jobs..."
                        className="w-[220px] pl-8"
                    />
                </div>

                {/* Filter */}
                <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                </Button>

                {/* Add */}
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="sm">
                            <Plus className="mr-2 h-4 w-4" />
                            Add Job
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-h-[vh] overflow-y-auto sm:max-w-[70vw]">
                        <JobForm
                            title="Add Job"
                            branches={branches}
                            onSubmit={(data) => {
                                console.log('submitted data ', data);
                            }}
                        />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}
