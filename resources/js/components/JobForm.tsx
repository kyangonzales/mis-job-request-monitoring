import { Button } from '@/components/ui/button';
import {
    DialogClose,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import { DatePicker } from './DatePicker';

interface Branch {
    id: number;
    name: string;
    code: string;
}

interface JobFormProps {
    title: string;
    defaultValues?: any;
    branches: Branch[];
    onSubmit: (data: any) => void;
    loading?: boolean;
}
interface JobData {
    ref_doc: string;
    rm_no: string;
    branch_id: string;
    department: string;
    requested_by: string;
    assignee: string;
    item_description: string;
    item_id: string;
    status: string;
    assessment: string;
    action_taken: string;
    date_received?: Date;
    started_at?: Date;
    completed_at?: Date;
    remarks: string;
}
export default function JobForm({
    title,
    defaultValues = {},
    branches,
    onSubmit,
    loading = false,
}: JobFormProps) {
    const [formData, setFormData] = React.useState<JobData>({
        ref_doc: '',
        rm_no: '',
        branch_id: '',
        department: '',
        requested_by: '',
        assignee: '',
        item_description: '',
        item_id: '',
        status: 'Pending',
        assessment: '',
        action_taken: '',
        date_received: undefined,
        started_at: undefined,
        completed_at: undefined,
        remarks: '',
    });
    const handleChange = (name: string, value: any) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };
    const handleBranchChange = (branchId: string) => {
        handleChange('branch_id', branchId);

        const branch = branches.find((b) => b.id.toString() === branchId);
        if (!branch) return;

        const now = new Date();
        const year = now.getFullYear().toString(); // last 2 digits ng year
        const month = (now.getMonth() + 1).toString().padStart(2, '0'); // 01-12

        const rmNo = `${branch.code}-${year}${month}-`;
        handleChange('rm_no', rmNo);
    };

    return (
        <form onSubmit={handleSubmit}>
            <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>
                    Fill in the job details below.
                </DialogDescription>
            </DialogHeader>

            {/* JOB INFO */}
            <div className="mt-2 grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                    <Label>Ref. Doc</Label>
                    <Input
                        name="ref_doc"
                        value={formData.ref_doc}
                        onChange={(e) => {
                            handleChange('ref_doc', e.target.value);
                        }}
                    />
                </div>

                <div className="mt-2 grid gap-2">
                    <Label>Branch</Label>
                    <Select
                        name="branch_id"
                        value={formData.branch_id}
                        onValueChange={handleBranchChange}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue
                                placeholder={
                                    loading ? 'Loading...' : 'Select Branch'
                                }
                            />
                        </SelectTrigger>
                        <SelectContent>
                            {branches.map((branch) => (
                                <SelectItem
                                    key={branch.id}
                                    value={branch.id.toString()}
                                >
                                    {branch.name} - (0{branch.code})
                                </SelectItem>
                            ))}{' '}
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid gap-2">
                    <Label>RM No.</Label>
                    <Input
                        name="rm_no"
                        value={formData.rm_no}
                        onChange={(e) => {
                            handleChange('rm_no', e.target.value);
                        }}
                    />
                </div>
            </div>

            {/* DEPARTMENT */}
            <div className="mt-2 grid gap-2">
                <Label>Department</Label>
                <Input
                    name="department"
                    value={formData.department}
                    onChange={(e) => handleChange('department', e.target.value)}
                />
            </div>

            {/* PEOPLE */}
            <div className="mt-2 grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                    <Label>Requested By</Label>
                    <Input
                        name="requested_by"
                        value={formData.requested_by}
                        onChange={(e) =>
                            handleChange('requested_by', e.target.value)
                        }
                    />
                </div>

                <div className="grid gap-2">
                    <Label>Assignee</Label>
                    <Input
                        name="assignee"
                        value={formData.assignee}
                        onChange={(e) =>
                            handleChange('assignee', e.target.value)
                        }
                    />
                </div>
            </div>

            {/* ITEM DETAILS */}
            <div className="mt-2 grid grid-cols-3 gap-4">
                <div className="col-span-2 grid gap-2">
                    <Label>Item Description</Label>
                    <Textarea
                        name="item_description"
                        value={formData.item_description}
                        onChange={(e) =>
                            handleChange('item_description', e.target.value)
                        }
                    />
                </div>

                <div className="grid gap-2">
                    <Label>Item ID</Label>
                    <Input
                        name="item_id"
                        value={formData.item_id}
                        onChange={(e) =>
                            handleChange('item_id', e.target.value)
                        }
                    />
                </div>
            </div>

            {/* WORK DETAILS */}
            <div className="mt-2 grid grid-cols-3 gap-4">
                <div className="grid gap-2">
                    <Label>Status</Label>
                    <Select
                        name="status"
                        defaultValue="Pending"
                        value={formData.status}
                        onValueChange={(value) => handleChange('status', value)}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Pending">Pending</SelectItem>
                            <SelectItem value="In Progress">
                                In Progress
                            </SelectItem>
                            <SelectItem value="On Hold">On Hold</SelectItem>
                            <SelectItem value="Escalated">Escalated</SelectItem>
                            <SelectItem value="Completed">Completed</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="col-span-2 grid gap-2">
                    <Label>Assessment</Label>
                    <Textarea
                        name="assessment"
                        value={formData.assessment}
                        onChange={(e) =>
                            handleChange('assessment', e.target.value)
                        }
                    />
                </div>
            </div>

            <div className="grid gap-2">
                <Label>Action Taken</Label>
                <Textarea
                    name="action_taken"
                    value={formData.action_taken}
                    onChange={(e) =>
                        handleChange('action_taken', e.target.value)
                    }
                />
            </div>

            <div className="mt-3 grid grid-cols-[1fr_1fr_1fr_1.8fr] gap-2">
                <DatePicker
                    label="Date Received"
                    value={formData.date_received} // bind sa state
                    onChange={(date) => handleChange('date_received', date)} // update sa state
                />
                <DatePicker
                    label="Date Started"
                    value={formData.started_at}
                    onChange={(date) => handleChange('started_at', date)}
                />
                <DatePicker
                    label="Date Completed"
                    value={formData.completed_at}
                    onChange={(date) => handleChange('completed_at', date)}
                />
                <div>
                    <Label>Remarks</Label>
                    <Textarea
                        name="remarks"
                        value={formData.remarks}
                        onChange={(e) =>
                            handleChange('remarks', e.target.value)
                        }
                    />
                </div>
            </div>

            {/* FOOTER */}
            <DialogFooter className="sticky bottom-0 mt-2 bg-background pt-4">
                <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save Job</Button>
            </DialogFooter>
        </form>
    );
}
