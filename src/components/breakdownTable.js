import React from 'react';

class BreakDownTable extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            notes: {
                1: 0,
                2: 0,
                5: 0,
                10: 0,
                20: 0,
                50: 0,
                100: 0,
                200: 0,
                500: 0,
                2000: 0,
            },
            denominations: [1, 2, 5, 10, 20, 50, 100, 200, 500, 2000],
            totalNotes: 0,
        }
    }

    static getNotes(amount) {
        const notes = {};
        const denominations = [2000, 500, 200, 100, 50, 10, 5, 2, 1];
        let idx = 0;
        let totalNotes = 0;
        while (amount > 0) {
            const denomination = denominations[idx];
            const quantity = amount / denomination
            if (quantity >= 1) {
                const numberOfNotes = Math.floor(quantity)
                totalNotes += numberOfNotes;
                notes[denomination] = numberOfNotes;
            }
            amount %= denomination;
            idx++;
        }

        return {
            notes,
            totalNotes,
        }
    }


    static getDerivedStateFromProps(nextProps) {
        const { notes, totalNotes } = BreakDownTable.getNotes(nextProps.totalAmount);
        return {
            notes,
            totalNotes,
        }
    }

    render() {

        const { notes, denominations, totalNotes } = this.state;
        return (
            <div className="breakdown">
                <div>You will get following amount</div>
                <div className="denominator">
                    {
                        denominations.map((val, idx) => {
                            return (
                                <div className="note-type" key={idx}>{notes[val] || 0} notes of RS {val}</div>
                            )
                        })
                    }
                    <div>Total notes dispensed: {totalNotes}</div>
                </div>
            </div>
        )
    }

}

export default BreakDownTable;